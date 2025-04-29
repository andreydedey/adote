import { useParams } from "react-router";
import golden from "../../assets/image/golden.jpg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { pet, race } from "../../utils/types/Pet";

export function Pet() {
  const { id } = useParams<{ id: string }>();

  const [pet, setPet] = useState<pet | null>(null);
  const [races, setRaces] = useState<race[]>([]);

  useEffect(() => {
    console.log(id);

    api
      .get(`/pet/get_pet/${id}`)
      .then((response) => {
        const { data } = response;
        setPet(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });

    api
      .get("/race/get_races")
      .then((response) => {
        const { data } = response;
        setRaces(data.races);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching pet data:", error);
      });
  }, [id]);
  return (
    <div className="ml-6">
      <h1 className="text-xl font-medium">Informações do pet</h1>
      <div className="flex gap-3 mt-3">
        <img className="max-w-xs rounded-md" src={golden} alt="pet" />
        <div className="flex flex-col gap-2">
          <h3>
            <span className="font-medium">Nome:</span> {pet?.pet_name}
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

      {pet?.description && (
        <div className="max-w-sm mt-3">
          <h3 className="font-medium">Descrição:</h3>
          <p>{pet.description}</p>
          <div className="flex gap-2 mt-3">
            <h3 className="font-medium">Raça</h3>
            <p className="bg-slate-300 rounded-lg inline px-2">
              {races.find((race) => race.id === pet?.race_id)?.race}
            </p>
          </div>
        </div>
      )}

      <hr className="my-3" />

      <h1 className="text-xl font-medium">Informações Residenciais</h1>
      <div className="grid grid-cols-2 max-w-lg">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">Estado:</h2>
          <p>{pet?.state}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-medium">Cidade:</h2>
          <p>{pet?.city}</p>
        </div>
        <div className="col-span-2 flex flex-col">
          <h2 className="text-lg font-medium">Telefone para contato:</h2>
          <p>{pet?.phonenumber}</p>
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
