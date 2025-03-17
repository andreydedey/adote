import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Publicize() {
  return (
    <form action="#" className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-center text-xl font-medium mb-4">Quero Divulgar</h1>
      <div className="flex gap-4 mb-2">
        <label htmlFor="file_input" className="mb-2 text-sm font-medium">
          Fotos do Pet
        </label>
        <input
          type="file"
          aria-describedby="file_input_help"
          id="file_input"
          className="flex-grow text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:bg-gray-300s focus:outline-none"
        />
      </div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium">
        Nome
      </label>
      <input
        type="text"
        className="block bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 w-full p-2.5 mb-2"
      />

      <div className="flex gap-4 mb-2">
        <div className="flex-grow">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Estado
          </label>
          <input
            type="text"
            className="block bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 w-full p-2.5"
          />
        </div>
        <div className="flex-grow">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Cidade
          </label>
          <input
            type="text"
            className="block bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-blue-500 w-full p-2.5"
          />
        </div>
      </div>
      <label
        htmlFor="phone-input"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Phone number:
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <FontAwesomeIcon
            className="w-4 h-4 text-gray-500 icon="
            icon={faPhone}
          />
        </div>
        <input
          type="text"
          id="phone-input"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 block w-full ps-10 p-2.5"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="(00) 1234-7890"
          required
        />
      </div>
      <p id="helper-text-explanation" className="my-2 text-sm text-gray-500">
        Selecione um número de Telefone que siga o formato
      </p>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Raça
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-500 block w-full p-2.5"
      >
        <option value="US">Vira-lata</option>
        <option value="CA">Golden Retriever</option>
        <option value="FR">Border Collie</option>
        <option value="DE">Poodle</option>
      </select>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-3"
      >
        Salvar
      </button>
    </form>
  );
}
