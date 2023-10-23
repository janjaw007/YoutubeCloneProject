import React from "react";
import "./Filterbar.css";

const filterLists = [
  { genre: "ทั้งหมด", isActive: false },
  { genre: "มิ้กซ์", isActive: false },
  { genre: "เกม", isActive: false },
  { genre: "สด", isActive: false },
  { genre: "เพลง", isActive: false },
  { genre: "ข่าวสาร", isActive: false },
  { genre: "เกมแอ็กชั่นผจญภัย", isActive: false },
  { genre: "ฟุตบอล", isActive: false },
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
