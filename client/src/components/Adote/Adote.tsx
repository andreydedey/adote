import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../Table/Table";
import { faCity, faPaw } from "@fortawesome/free-solid-svg-icons";

export function Adopt() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h1 className="text-xl font-medium mb-4">Adote</h1>
      <hr />
      <form className="flex mt-4 gap-4" action="">
        <div className="w-6/12 relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon className="w-4 h-4" icon={faCity} />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Busque pela cidade..."
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FontAwesomeIcon className="w-4 h-4" icon={faPaw} />
          </div>
          <input
            type="text"
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Busque pela raça..."
          />
        </div>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 
        focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
        >
          Filtrar
        </button>
      </form>
      <Table />
    </div>
  );
}
