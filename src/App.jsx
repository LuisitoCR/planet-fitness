import { useEffect, useState } from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Carousel,
} from "./components";
import Login from "./components/Login";
import Usuarios from "./data/usuarios.json";

const App = () => {
  const [login, setLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    setUsers(Usuarios);
  }, []);

  const iniciarSesion = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.contrasenia === password
    );

    if (user !== undefined) {
      setUser(user);
      return true;
    }
    return false;
  };

  const cerrarVentanaLogin = () => {
    setLogin(false);
  };
  const cerrarLogin = () => {
    setUser()
  }

  const abrirLogin = () => {
    setLogin(true);
  };

  if (login)
    return (
      <div className="bg-primary w-full h-screen overflow-hidden px-40 py-4">
        <Login cerrarVentanaLogin = {cerrarVentanaLogin} iniciarSesion={iniciarSesion} />
      </div>
    );
  else
    return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar abrirLogin={abrirLogin} user = {user} cerrarLogin = {cerrarLogin}/>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Stats /> */}
            <Business />
            <Carousel />
            {/* <CardDeal /> */}
            <Testimonials />
            {/* <Clients /> */}
            {/* <CTA />  */}
            <Footer />
          </div>
        </div>
      </div>
    );
};

export default App;
