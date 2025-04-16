function WebsiteBox({ pwd_to_photo }) {
  return (
    <>
      <div id="website__box">
        <img id="website__box-img" src={pwd_to_photo.foto}></img>
      </div>
    </>
  );
}
export default WebsiteBox;
