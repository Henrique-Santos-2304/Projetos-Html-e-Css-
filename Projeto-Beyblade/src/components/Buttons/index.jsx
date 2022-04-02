import { useContext, useEffect } from "react";
import { catchAllData, sendBeyblades } from "../../Beyblades-Automatize";
import { GlobalContext } from "../../App";

export default function Buttons() {
  const context = useContext(GlobalContext);
  const { catchAllDispatch } = context;

  // Botão que ativa a automação dos dados para o banco de dados firebase
  useEffect(() => {
    async function autoPosts() {
      const response = await catchAllData();
      catchAllDispatch(response);
    }
    autoPosts();
  }, []);
  return (
    <div className="buttonSend">
      <button onClick={sendBeyblades}> Enviar </button>
    </div>
  );
}
