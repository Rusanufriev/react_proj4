import "./LanguageSwitcher.css"
function LanguageSwitcher({ btn1, btn2 }) {
  return (
      <div className="languageSwitcher">
        <button  onClick={btn1}>RU</button>
        <button  onClick={btn2}>EN</button>
      </div>
  )
}
export default LanguageSwitcher;
