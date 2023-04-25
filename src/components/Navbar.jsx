import { useState } from "react";
import { close, logofitness, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ abrirLogin, user, cerrarLogin }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logofitness} alt="hoobank" className="w-[64px] h-[64px] " />
      <p className="text-white">
        PLANET <span className="text-gradient">FITNESS</span>{" "}
      </p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.id !== "login" ? (
              <a href={`#${nav.id}`}>{nav.title}</a>
            ) : (
              user === undefined && (
                <button onClick={() => abrirLogin()}>{nav.title}</button>
              )
            )}
          </li>
        ))}

        {user !== undefined && (
          <>
            <li
              className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
            >
              {user.email}
            </li>

            <li
              className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
            >
              Inventario
            </li>
            <li
              className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
            >
              Ventas
            </li>
            <li
              className={`mr-10 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
            >
              Personal
            </li>

            <li
              className={`mr-0 font-poppins font-normal cursor-pointer text-[16px] text-white`}
            >
              <button onClick={() => cerrarLogin()}>Cerrar Sesión</button>
            </li>
          </>
        )}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-10 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]  rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.id !== "login" ? (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                ) : (
                  user === undefined && (
                    <button onClick={() => abrirLogin()}>{nav.title}</button>
                  )
                )}
              </li>
            ))}

            {user !== undefined && (
              <>
                <li
                  className={`mb-2 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
                >
                  {user.email}
                </li>
                <li
                  className={`mb-2 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
                >
                  Inventario
                </li>
                <li
                  className={`mb-2 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
                >
                  Ventas
                </li>
                <li
                  className={`mb-2 font-poppins font-normal cursor-pointer text-[16px] text-green-600`}
                >
                  Personal
                </li>
                <li
                  className={`mb-0 font-poppins font-normal  text-[16px] text-white`}
                >              
                  <button onClick={() => cerrarLogin()}>Cerrar Sesión</button>

                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
