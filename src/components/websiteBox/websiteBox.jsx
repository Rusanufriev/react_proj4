function WebsiteBox({ pwd_to_photo }) {
  return (
    <>
      <div className="website__box">
        <img className="website__box-img" src={pwd_to_photo.foto}></img>
      </div>
    </>
  );
}
export default WebsiteBox;
