import logo_adote from "../../assets/image/logo_adote.webp";

export function Banner() {
  return (
    <>
      <img className="h-64" src={logo_adote} alt="logo_adote" />
      <h1>ADO.TE</h1>
      <h2>Nos ajude a salvar vidas</h2>
    </>
  );
}
