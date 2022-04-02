import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import Logo from "../../img/beybladeLogo.png";
import Search from "../../img/search.svg";

export default function HeaderPosts() {
  const [inputValue, setInputvalue] = useState("");
  const context = useContext(GlobalContext);
  const { catchAll, searchDispatch, setToogleSearch } = context;

  const handleInputBeyblade = (e) => {
    setInputvalue(e.target.value);
  };
  // Manipulação de dados e estados pelo  input
  useEffect(() => {
    if (inputValue) {
      setToogleSearch(true);
      const prePosts = catchAll.filter((post) => {
        return post.tittle.includes(inputValue);
      });
      searchDispatch(prePosts);
    } else {
      searchDispatch([]);
      setToogleSearch(false);
    }
  }, [inputValue]);

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Beyblade Logo" />
      </div>
      <div className="search_box">
        <input
          type="text"
          className="search_txt"
          placeholder="Busque sua Beyblade"
          onChange={handleInputBeyblade}
          value={inputValue}
        />
        <button className="search_btn">
          <img src={Search} alt="" />
        </button>
      </div>
    </div>
  );
}
