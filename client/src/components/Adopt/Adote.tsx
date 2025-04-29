import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "../Table/Table";
import { faCity, faPaw } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { pet, race, tag } from "../../utils/types/Pet";

export function Adopt() {
  const [pets, setPets] = useState<pet[]>([]);
  const [races, setRaces] = useState<race[]>([]);
  const [tags, setTags] = useState<tag[]>([]);

  const [filteredPets, setFilteredPets] = useState<pet[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRace, setSelectedRace] = useState("");

  const handleFilter = () => {
    const filtered = pets.filter((pet) => {
      const cityMatches =
        selectedCity !== ""
          ? pet.city.toLowerCase().includes(selectedCity.toLowerCase())
          : true;
      const raceMatches =
        selectedRace !== ""
          ? races
              .find((race) => pet.race_id === race.id)
              ?.race.toLowerCase()
              .includes(selectedRace.toLocaleLowerCase())
          : true;

      console.log(races.find((race) => pet.race_id === race.id)?.race);

      return cityMatches && raceMatches;
    });

    setFilteredPets(filtered);
  };

  useEffect(() => {
    api
      .get("/pet/get_pets")
      .then((response) => {
        const { data } = response;
        setPets(data);
        setFilteredPets(data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });

    api
      .get("/race/get_races")
      .then((response) => {
        const { data } = response;
        setRaces(data.races);
      })
      .catch((error) => {
        console.error("Error fetching races:", error);
      });

    api
      .get("/tag/get_tags")
      .then((response) => {
        const { data } = response;
        setTags(data.tags);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  }, []);

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
            onChange={(e) => setSelectedCity(e.target.value)}
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
            onChange={(e) => setSelectedRace(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 
        focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
          onClick={handleFilter}
        >
          Filtrar
        </button>
      </form>
      <Table pets={filteredPets} races={races} tags={tags} />
    </div>
  );
}
