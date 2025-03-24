import { useState } from "react";
import "./App.css";

function App() {
  const [stateButtonlang, set_StateButtonlang] = useState("RU");
  const [stateButtonlanguage, set_StateButtonlanguage] = useState("EN");
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
    foto: "/rusfoto.jpg",
  };

  const buttonlang = () => {
    if (stateButtonlang == "RU") {
      set_StateButtonlang("EN");
    } else {
      set_StateButtonlang("RU");
    }
  };

  const buttonlanguage = () => {
    if (stateButtonlanguage == "EN") {
      set_StateButtonlanguage("RU");
    } else {
      set_StateButtonlanguage("EN");
    }
  };

  return (
    <>
      <header id="header">
        <span id="logo">
          {stateButtonlang == "RU" ? USER.ru.fio : USER.en.fio}
        </span>
      </header>

      <div id="website">
        <div id="container website__container">
          <div id="website__about">
            <h1 id="website__title">
              {stateButtonlang == "RU"
                ? USER.ru.profession
                : USER.en.profession}
            </h1>
            <h2 id="website__subtitle">
              {stateButtonlang == "RU" ? USER.ru.name : USER.en.name}
            </h2>
            <p id="website__description">
              {stateButtonlang == "RU"
                ? USER.ru.description
                : USER.en.description}
            </p>
            <p id="website__tags">
              {stateButtonlang == "RU" ? USER.ru.tags : USER.en.tags}
            </p>
            <p id="website__contacts">
              {stateButtonlang == "RU" ? USER.ru.notebook : USER.en.notebook}
            </p>
            <div id="website__links">
              {USER.mycontacts.map((data) => (
                <a id="hero__link" href={data[0]}>
                  <i className={data[1]}></i>
                </a>
              ))}
            </div>
          </div>
          <div id="website__box">
            {<img id="website__box-img" src={USER.foto}></img>}
          </div>
        </div>
      </div>

      <div id="languageSwitcher">
        <button onClick={buttonlang}>
          {stateButtonlang == "RU" ? "EN" : "RU"}
        </button>
        <button onClick={buttonlanguage}>
          {stateButtonlang == "EN" ? "RU" : "EN"}
        </button>
      </div>
    </>
  );
}

export default App;
