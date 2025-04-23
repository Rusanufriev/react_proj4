import "./header.css"
function Header({ lang, user_fio_ru, user_fio_en }) {
  return (
    <>
      <header className="header">
        {/* у тебя тут еще компонент с logo. Где стили для него?
        Не вижу их в файле header.css */}
        <span className="logo">{lang == "RU" ? user_fio_ru : user_fio_en}</span>
      </header>
    </>
  );
}

export default Header;
