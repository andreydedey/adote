import dog from "../../assets/image/pet.jpg";

export function Pet() {
  return (
    <div className="ml-6">
      <h1 className="text-xl font-medium">Informações do pet</h1>
      <div className="flex gap-3 mt-3">
        <img className="max-w-xs" src={dog} alt="pet image here" />
        <div className="flex flex-col gap-2">
          <h3>
            <span className="font-medium">Nome:</span> (nome do pet aqui!)
          </h3>
          <div className="max-w-sm flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              Dócil
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              Vacinado
            </span>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
              Sociável com crianças
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-sm mt-3">
        <h3 className="font-medium">Descrição:</h3>
        <p>
          dummy text and a bunch of other things just to fill this space and
          blabla bla bla and text and more text
        </p>
        <div className="flex gap-2 mt-3">
          <h3 className="font-medium">Raça</h3>
          <p className="bg-slate-300 rounded-lg inline px-2">Vira lata</p>
        </div>
      </div>

      <hr className="my-3" />

      <h1 className="text-xl font-medium">Informações Residenciais</h1>
      <div className="grid grid-cols-2 max-w-lg">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">Estado:</h2>
          <p>Santa Catarina</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">Cidade:</h2>
          <p>Florianópolis</p>
        </div>
        <div className="col-span-2 flex flex-col">
          <h2 className="text-lg font-medium">Telefone para contato:</h2>
          <p>(48) 12398173-1231</p>
        </div>
      </div>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
        focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3"
      >
        Solicitar Adoção
      </button>
    </div>
  );
}
