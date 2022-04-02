import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../App";
import Left from "../../img/left-arrow-svgrepo-com.svg";
import Modal from "../Modal";

export default function Posts() {
  const [isModal, setIsModal] = useState({
    showIsModal: false,
    urlIsModal: "",
    alt: "",
  });

  const context = useContext(GlobalContext);
  const { catchAll, toogleSearch, search } = context;
  const carousel = useRef(null);

  const closeModal = () => {
    console.log("Modal");
    setIsModal({
      showIsModal: false,
      urlIsModal: "",
      alt: "",
    });
  };
  const modalBeyblade = (e) => {
    setIsModal({
      showIsModal: true,
      urlIsModal: e.target.currentSrc,
      alt: e.target.alt,
    });
  };

  // Carregamento de beyblades dependendo do estado de input
  const posts = (list) => {
    return list.map(({ tittle, img }) => {
      return (
        <div className="item" key={tittle}>
          <div className="name">
            <h2>{tittle}</h2>
          </div>
          <div className="image" onClick={modalBeyblade}>
            <img src={img} alt={tittle} />
          </div>
        </div>
      );
    });
  };
  // manipulações do Carousel
  const clickLeft = (e) => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const clickRight = (e) => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div className="container">
        {isModal.showIsModal ? (
          <Modal url={isModal.urlIsModal} alt={isModal.alt} fn={closeModal} />
        ) : (
          <div className="carousel" ref={carousel}>
            {/* todos os posts se input estiver desativado, senão carrega os posts da pesquisa */}
            {!toogleSearch ? posts(catchAll) : posts(search)}
          </div>
        )}
        {/* Só carrega os botões do carousel se tiver posts a serem carregados */}
        {catchAll.length > 0 && !isModal.showIsModal && (
          <div className="chevron">
            <button onClick={clickLeft} id="left">
              <img src={Left} alt="Icon right" />
            </button>
            <button onClick={clickRight} id="right">
              <img src={Left} alt="Icon Left" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
