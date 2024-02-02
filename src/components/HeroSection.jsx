import { useState, useEffect } from "react";

import logo from "../assets/light-logo.png";
import bg from "../assets/clinic.png";

export function HeroSection() {
  const [howManyYears, setHowManyYears] = useState(32);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    setHowManyYears(currentYear - 1991);
  }, []); // to deal with the passing of time

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="flex justify-center bg-center bg-cover bg-no-repeat w-full px-4 border-b-4 border-teal-600"
    >
      <div
        className="flex flex-col items-center gap-6 py-24 lg:py-44 text-center drop-shadow-sm"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <img
          src={logo}
          alt="Logotipo de Baldim Odontologia Especializada."
          className="w-80 md:w-[480px]"
        />

        <div className="text-teal-600 text-lg md:text-2xl font-semibold">
          CONSTRUINDO SORRISOS HÁ {howManyYears} ANOS
        </div>

        <a href="#story">
          <button className="px-8 py-2 text-teal-50 hover:text-teal-600 rounded border border-teal-50 hover:border-teal-600 transition duration-300">
            SAIBA MAIS
          </button>
        </a>
      </div>
    </section>
  );
}
