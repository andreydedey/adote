import { SideBar } from "../SideBar";

export function Home() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h1 className="text-center text-xl font-medium mb-4">Seus pets</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-sm text-left rtl:text-right text-gray-800">
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
            <tr className="border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium tex-gray-800 whitespace-nowrap"
              >
                pet data name
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
