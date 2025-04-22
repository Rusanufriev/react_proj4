import LanguageSwitcher from "../shared/Bigbutton/LanguageSwitcher.jsx";

function WebsiteAbout({
  lang,
  user_prof_ru,
  user_prof_en,
  user_name_ru,
  user_name_en,
  user_desc_ru,
  user_desc_en,
  user_tags_ru,
  user_tags_en,
  user_notebook_ru,
  user_notebook_en,
  my_contacts,
    btn1,
    btn2,
}) {
  return (
    <>
      <div className="website__about">
        <h1 className="website__title">
          {lang == "RU" ? user_prof_ru : user_prof_en}
        </h1>
        <h2 className="website__subtitle">
          {lang == "RU" ? user_name_ru : user_name_en}
        </h2>
        <p className="website__description">
          {lang == "RU" ? user_desc_ru : user_desc_en}
        </p>
        <p className="website__tags">{lang == "RU" ? user_tags_ru : user_tags_en}</p>
        <p className="website__contacts">
          {lang == "RU" ? user_notebook_ru : user_notebook_en}
        </p>
        <div className="website__links">
          {my_contacts.map((data) => (
            <a className="hero__link" href={data[0]}>
              <i className={data[1]}></i>
            </a>
          ))}
        </div>
        <LanguageSwitcher btn1={btn1} btn2={btn2}/>
      </div>
    </>
  );
}

export default WebsiteAbout;
