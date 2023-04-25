import { useState } from "react";
import { logofitness } from "../assets";

const Login = ({ cerrarVentanaLogin, iniciarSesion }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (iniciarSesion(email, password)) {
      setError(false)
      cerrarVentanaLogin()
    } else {
      setError(true)
    }

  };

  return (
    <>
      <div
        onSubmit={handleSubmit}
        className=" z-[5] h-full w-full rounded px-8 pt-6 pb-8 flex flex-col items-center"
      >
        {/* gradient start */}
        <div className="absolute -z-[0] w-[50%] h-[55%] top-0 pink__gradient" />
        <div className="absolute -z-[0] w-[20%] h-[100%] right-0 bottom-20 blue__gradient" />
        {/* gradient end */}

        <div >
          <img src={logofitness} alt="hoobank" className="w-[256px] h-[256px]" />
          <p className="text-white text-4xl mb-8">
            PLANET <span className="text-gradient">FITNESS</span>{" "}
          </p>
        </div>

        <div className="mb-4 w-96">
          <label className="block text-dimWhite font-bold mb-2" htmlFor="email">
            Correo Electronico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6 w-96">
          <label
            className="block text-dimWhite font-bold mb-2"
            htmlFor="password"
          >
            Constraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <span className="text-red-500 mb-4">Correo Electronico o contraseña incorrecta. Intentelo de nuevo</span>}

        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={cerrarVentanaLogin}
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
