function Header({ lang, user_fio_ru, user_fio_en }) {
  return (
    <>
      <header className="header">
        <span className="logo">{lang == "RU" ? user_fio_ru : user_fio_en}</span>
      </header>
    </>
  );
}

export default Header;
