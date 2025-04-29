import { Link } from "react-router-dom";
import { api } from "../../services/api";
import type { pet, race, tag } from "../../utils/types/Pet";
import golden from '../../assets/image/golden.jpg'

interface TableProps {
  pets: pet[];
  races: race[];
  tags: tag[];
}

export function Table({pets, races, tags}: TableProps) {
  const removePet = async (id: string) => {
    api.delete(`/pet/delete_pet/${id}`)
      .then((response) => {
        const { data } = response;
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error removing pet:", error);
      });

  }

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-600">
        <thead className="text-sm text-left text-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              {}
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
              <Link to={`/pet/${pet.id}`} className="hover:cursor-pointer">
              <th
                scope="row"
                className="px-6 py-6 font-medium text-gray-600 whitespace-nowrap"
                >
                  {pet.pet_name}
              </th>
                </Link>
                <td className="px-6 py-4">
                  <img src={golden} alt="Pet" className="w-12 h-12 object-cover" />
                </td>
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
                  onClick={() => removePet(pet.id)}
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
