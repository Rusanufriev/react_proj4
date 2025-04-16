function LanguageSwitcher({ button1, button2 }) {
  return (
    <>
      <div id="languageSwitcher">
        <button onClick={button1}>RU</button>
        <button onClick={button2}>EN</button>
      </div>
      ;
    </>
  );
}
export default LanguageSwitcher;
