import { SideBar } from "../SideBar";
import { Table } from "../Table/Table";

export function Home() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h1 className="text-xl font-medium mb-4">Seus pets</h1>
      <hr />
      <Table />
    </div>
  );
}
