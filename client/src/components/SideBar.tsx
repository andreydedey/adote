import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faHouse,
  faPaw,
  faTowerBroadcast,
} from "@fortawesome/free-solid-svg-icons";

export function SideBar() {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 text-white"
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto"
          style={{ backgroundColor: "#391D34" }}
        >
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/home"}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 duration-300 ease-out"
              >
                <FontAwesomeIcon icon={faHouse} />
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/adoption"}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 duration-300 ease-out"
              >
                <FontAwesomeIcon icon={faPaw} />
                <span className="ms-3">Adote</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/divulgar"}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 duration-300 ease-out"
              >
                <FontAwesomeIcon icon={faTowerBroadcast} />
                <span className="ms-3">Divulgar</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/solicitation"}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 duration-300 ease-out"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ms-3">Solicitações</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <h1></h1>
    </div>
  );
}
