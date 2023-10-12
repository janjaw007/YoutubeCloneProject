import React from "react";
import "./Filterbar.css";

const filterLists = [
  { genre: "ทั้งหมด" },
  { genre: "มิ้กซ์" },
  { genre: "เกม" },
  { genre: "สด" },
  { genre: "เพลง" },
  { genre: "ข่าวสาร" },
  { genre: "เกมแอ็กชั่นผจญภัย" },
  { genre: "ฟุตบอล" },
];

function Filterbar() {
  return (
    <div className="Filterbar-containter">
      {filterLists.map((list) => {
        return <Filter key={list.genre} list={list.genre} />;
      })}
    </div>
  );
}

function Filter({ list }) {
  return <li>{list}</li>;
}

export default Filterbar;
