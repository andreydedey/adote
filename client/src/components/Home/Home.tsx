import { useEffect, useState } from "react";
import { Table } from "../Table/Table";
import { api } from "../../services/api";

export function Home() {
  const [pets, setPets] = useState([]);
  const [races, setRaces] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api.get('/pet/get_pets')
    .then((response) => {
      const { data } = response;
      setPets(data);
    }).catch((error) => {
      console.error("Error fetching pets:", error);
    }
    );

    api.get('/race/get_races')
    .then((response) => {
      const { data } = response;
      setRaces(data.races);
    }).catch((error) => {
      console.error("Error fetching races:", error);
    })

    api.get('/tag/get_tags')
    .then((response) => {
      const { data } = response;
      setTags(data.tags);
    }
    ).catch((error) => {
      console.error("Error fetching tags:", error);
    }
    );
  }, [])

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h1 className="text-xl font-medium mb-4">Seus pets</h1>
      <hr />
      <Table pets={pets} races={races} tags={tags} />
    </div>
  );
}
