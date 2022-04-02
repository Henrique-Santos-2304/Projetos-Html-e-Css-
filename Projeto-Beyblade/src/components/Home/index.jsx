import Buttons from "../Buttons";
import { useContext } from "react";
import HeaderPosts from "../HeaderPosts";
import { GlobalContext } from "../../App";
import Posts from "../Posts";

export default function Home() {
  const context = useContext(GlobalContext);
  return (
    <div className="home">
      <HeaderPosts />
      <Posts />
      {context.catchAll.length === 0 && <Buttons />}
    </div>
  );
}
