import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  const [navs, setNavs] = useState([
    { id: "1", title: "Home", link: "/", active: true },
    { id: "2", title: "Trade", link: "/trade", active: false },
  ]);

  const changeNavHandler = (id: string) => {
    setNavs((prevState) =>
      prevState.map((x) => {
        if (x.id === id) x.active = true;
        else x.active = false;
        return x;
      })
    );
  };
  console.log(navs);

  const openModal = () => {
    document.getElementById("id01")!.style.display = "block";
  };
  return (
    <div className="container mx-auto m-3">
      <div className="flex items-center justify-between m-3">
        <div className="column-8 flex items-center justify-center m-3">
          {navs.map((nav) => (
            <Link
              key={nav.id}
              className={`m-3 nav-item ${nav.active && "active"}`}
              to={nav.link}
              onClick={() => changeNavHandler(nav.id)}
            >
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="column-4 flex items-center justify-center">
          <button className="m-5 login-button" onClick={openModal}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
