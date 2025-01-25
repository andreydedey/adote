import logo_adote from "../../assets/image/logo_adote.webp";

export function Logo() {
  return (
    <>
      <div className="flex items-center">
        <img className="w-12 mx-2" src={logo_adote} alt="logo_adote" />
        <h2>ADO.TE</h2>
      </div>
      <hr />
    </>
  );
}
