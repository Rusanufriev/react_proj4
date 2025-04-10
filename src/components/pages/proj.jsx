import { useState } from "react";
import "/src/App.css";
// import "/src/components/pages/buttons/button.jsx";

function App() {
  const [lang, setLang] = useState("RU");

  const USER = {
    ru: {
      fio: "Ануфриев Руслан Дмитриевич",
      profession: "Начинающий программист",
      name: "Ануфриев Руслан",
      description: `На данный момент работаю на заводе формовщиком ручной формы. Прохожу переквалификацию в области программирования, обучаюсь основам: JS, HTML, CSS, 
      Typescript, Reaction, Vue, Firebase. Я планирую развиваться в направлении фронтенда.`,
      tags: "Техники: Go, Python, Typescript ,Javascript",
      notebook: "Мои контакты:",
    },
    en: {
      fio: "Anufriev Ruslan Dmitrievich",
      profession: "Beginner programmer",
      name: "Anufriev Ruslan",
      description: `At the moment, I work at a factory as a hand molder. I am undergoing
    retraining (training) in the field of programming, I'm learning the
    basics of JS, html/css, typescrpt, react, vue, firebase. I plan to
    develop in the direction of frontend.`,
      tags: "Techs: Go, Python, Typescript, Javascript",
      notebook: "Contact me:",
    },
    mycontacts: [
      ["https://vk.com/gimbarr_anufriev", "bx bxl-vk"],
      [
        "https://www.instagram.com/rus_anufriev/profilecard/?igsh=aWRzcjFidHJnemsx",
        "bx bxl-instagram",
      ],
      ["https://t.me/Rusanufriev", "bx bxl-telegram"],
    ],
    foto: "/src/components/public/rusfoto.jpg",
  };

  const button1 = () => {
    setLang("RU");
  };

  const button2 = () => {
    setLang("EN");
  };

  return (
    <>
      <header id="header">
        <span id="logo">{lang == "RU" ? USER.ru.fio : USER.en.fio}</span>
      </header>

      <div id="website">
        <div id="container website__container">
          <div id="website__about">
            <h1 id="website__title">
              {lang == "RU" ? USER.ru.profession : USER.en.profession}
            </h1>
            <h2 id="website__subtitle">
              {lang == "RU" ? USER.ru.name : USER.en.name}
            </h2>
            <p id="website__description">
              {lang == "RU" ? USER.ru.description : USER.en.description}
            </p>
            <p id="website__tags">
              {lang == "RU" ? USER.ru.tags : USER.en.tags}
            </p>
            <p id="website__contacts">
              {lang == "RU" ? USER.ru.notebook : USER.en.notebook}
            </p>
            <div id="website__links">
              {USER.mycontacts.map((data) => (
                <a id="hero__link" href={data[0]}>
                  <i className={data[1]}></i>
                </a>
              ))}{" "}
              <div id="languageSwitcher">
                <button onClick={button1}>RU</button>
                <button onClick={button2}>EN</button>{" "}
              </div>
            </div>
          </div>
          <div id="website__box">
            <img id="website__box-img" src={USER.foto}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
