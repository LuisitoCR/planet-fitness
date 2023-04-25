import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        En Planet Fitness trabajamos directamente,{" "}
        <br className="sm:block hidden" /> con empresas europeas y
        norteamericanas
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Para conseguir un producto de calidad que cumpla las expectativas de
        los clientes más exigentes.
        <br className="sm:block hidden" />
        Nuestro objetivo no es venderle equipos que usted no necesita. En Planet
        Fitness somos profesionales formados directamente en salas de
        musculacion de todo el mundo, por eso le asesoramos para ofrecerle un
        equipamiento acorde a sus necesidades reales.
      </p>
{/* 
      <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
