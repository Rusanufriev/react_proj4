function WebsiteAbout(
    {
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
        button1,
        button2
    }) {
    return (
        <>
            <div id="website__about">
                <h1 id="website__title">
                    {lang == "RU" ? user_prof_ru : user_prof_en}
                </h1>
                <h2 id="website__subtitle">
                    {lang == "RU" ? user_name_ru : user_name_en}
                </h2>
                <p id="website__description">
                    {lang == "RU" ? user_desc_ru : user_desc_en}
                </p>
                <p id="website__tags">
                    {lang == "RU" ? user_tags_ru : user_tags_en}
                </p>
                <p id="website__contacts">
                    {lang == "RU" ? user_notebook_ru : user_notebook_en}
                </p>
                <div id="website__links">
                    {my_contacts.map((data) => (
                        <a id="hero__link" href={data[0]}>
                            <i className={data[1]}></i>
                        </a>
                    ))}{" "}
                    {/*здесь с кнопками тоже вынести по хоршему в отдельный модуль*/}
                    <div id="languageSwitcher">
                        <button onClick={button1}>RU</button>
                        <button onClick={button2}>EN</button>
                        {" "}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteAbout;