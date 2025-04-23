import "./websiteBox.css"
function WebsiteBox({ pwd_to_photo }) {
  return (
    <>
      <div className="website__box">
         {/* Здесь то же самое - не пойму почему тут нету стилей для 
         website__box-img */}
        <img className="website__box-img" src={pwd_to_photo.foto}></img>
      </div>
    </>
  );
}
export default WebsiteBox;
