import firebase from "../firebaseConnection";

const cheerio = require("cheerio");
const page = require("./page");

const db = firebase.firestore();
const $ = cheerio.load(page.html);

let serachBlade = {};
// função assincrona do automação com cheerio que pega todas as beyblades de
// uma lista do google inpecionando cada lista e copiando html externo
export const sendBeyblades = async () => {
  try {
    await $("img").each((index, element) => {
      const url = $(element).attr("src");
      const treatmentExtension = () => {
        if (url.includes(".png")) {
          const img = url.split(".png").shift() + ".png";
          return img;
        } else if (url.includes(".PNG")) {
          const img = url.split(".PNG").shift() + ".PNG";
          return img;
        } else if (url.includes(".jpg")) {
          const img = url.split(".jpg").shift() + ".jpg";
          return img;
        } else if (url.includes(".jpeg")) {
          const img = url.split(".jpeg").shift() + ".jpeg";
          return img;
        } else if (url.includes(".JPG")) {
          const img = url.split(".JPG").shift() + ".JPG";
          return img;
        } else {
          return null;
        }
      };
      const img = treatmentExtension();
      const alt = $(element).attr("alt").replace("/", " ").split(" ");
      const tittle = alt[1] ? `${alt[0]} ${alt[1]}` : alt[0];
      img && db.collection("beyblades").doc(`${tittle}`).set({ tittle, img });
    });
  } catch (error) {
    alert("ERRO AO RECEBER DADOS EXTERNOS, VER CÓDIGO DO ERRO NO CONSOLE");
    console.log(error);
  }
};
const list = [];
// Função que pega os dados do banco de dados remoto no firebase e retorna
// esses dados para o state no componente ButtonsSend
export const catchAllData = async () => {
  const dataBase = await db.collection("beyblades").get();
  dataBase.forEach(async (item) => {
    await list.push({
      tittle: item.data().tittle,
      img: item.data().img,
    });
  });
  return list;
};

export const searchData = async (id) => {
  const datas = await db.collection("beyblades").doc(id).get();
  serachBlade = {
    tittle: datas.data().tittle,
    img: datas.data().img,
  };
  return serachBlade;
};
