import { useState } from "react";
import "/src/App.css";
import Header from "../header/header.jsx";
import USER from "../constants/user.js";
import WebsiteAbout from "../websiteAbout/websiteAbout.jsx";
import WebsiteBox from "../websiteBox/websiteBox.jsx";

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
      <div className="website">
        <div className="container website__container">
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
            btn1={button1}
            btn2={button2}
          />
        </div>
      </div>
       <WebsiteBox pwd_to_photo={USER}/>
    </>
  );
}

export default MainPage;
