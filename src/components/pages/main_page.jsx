import { useState } from "react";
import "/src/App.css";
import Header from "../header/header.jsx";
import USER from "../constants/user.js";
import WebsiteAbout from "../websiteAbout/websiteAbout.jsx";

function MainPage() {
  const [lang, setLang] = useState("RU");

  const button1 = () => {
    setLang("RU");
  };

  const button2 = () => {
    setLang("EN");
  };

  return (
    <>
      <Header lang={lang} user_fio_ru={USER.ru.fio} user_fio_en={USER.en.fio} />
      <div id="website">
        <div id="container website__container">
          <WebsiteAbout
              lang={lang}
              user_prof_ru={USER.ru.profession}
              user_prof_en={USER.en.profession}
              user_name_ru={USER.ru.name}
              user_name_en={USER.en.name}
              user_desc_ru={USER.ru.description}
              user_desc_en={USER.en.description}
              user_tags_ru={USER.ru.tags}
              user_tags_en={USER.en.tags}
              user_notebook_ru={USER.ru.notebook}
              user_notebook_en={USER.en.notebook}
              my_contacts={USER.mycontacts}
              button1={button1}
              button2={button2}
          />
          {/*теперь тебе нужно доделать дальше с website__box*/}
          <div id="website__box">
            <img id="website__box-img" src={USER.foto}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
