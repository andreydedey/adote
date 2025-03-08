import dog from "../../assets/image/pet.jpg";

export function AdoptionSolicitation() {
  return (
    <div className="ml-6">
      <h1 className="text-xl font-medium">Solicitações de Adoções</h1>
      <div className="flex flex-wrap justify-between mt-3 gap-6">
        <div
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm text-white"
          style={{ backgroundColor: "#391D34" }}
        >
          <h1 className="text-2xl font-medium my-3 ml-5">Pluto</h1>
          <img src={dog} alt="dog.jpg" />
          <div className="p-5">
            <h2 className="mb-2 text-xl font-medium leading-none">
              Polvo Lino
            </h2>
            <h2 className="text-md font-medium">Telefone:</h2>
            <p className="mb-3 font-normal">(12) 12839-1239</p>
            <h2 className="text-md font-medium">Cidade:</h2>
            <p className="mb-3 font-normal">polvolândia</p>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
              font-medium rounded-lg text-sm px-5 py-2.5 me-3 mb-2"
            >
              Aprovar
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 
              font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
