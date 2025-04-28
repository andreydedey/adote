import type { pet, race, tag } from "../../utils/types/Pet";

interface TableProps {
  pets: pet[];
  races: race[];
  tags: tag[];
}




export function Table({pets, races, tags}: TableProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-600">
        <thead className="text-sm text-left text-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Foto
            </th>
            <th scope="col" className="px-6 py-3">
              Raça
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Remover
            </th>
          </tr>
        </thead>
        <tbody>
          { pets.map((pet) => (
            <tr key={pet.id} className="border-b border-gray-400">
            <th
              scope="row"
              className="px-6 py-4 font-medium tex-gray-600 whitespace-nowrap"
            >
              {pet.pet_name}
            </th>
            <td className="px-6 py-4">Foto here!</td>
            <td className="px-6 py-4">{races.find((race) => race.id === pet.race_id)?.race}</td>
            <td className="px-6 py-4">
              <span className="bg-green-800 text-green-200 text-xs font-medium px-5 py-2.5 rounded-lg">
                {tags.find((tag) => tag.id === pet.tag_id)?.status}
              </span>
            </td>
            <td className="px-6 py-4">
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-3
                  font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Remover
              </button>
            </td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}
