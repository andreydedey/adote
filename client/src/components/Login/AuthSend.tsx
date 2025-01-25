import { Link } from "react-router";
import { typeAuthSend } from "../../utils/types/typeAuthSend";

export function AuthSend({ button, link }: typeAuthSend) {
  return (
    <div className="flex justify-between mt-4">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm font-medium rounded-lg px-4 py-2"
      >
        {button}
      </button>
      <Link
        to="/register"
        className="text-sm text-blue-400 hover:text-blue-500 hover:underline"
      >
        {link}
      </Link>
    </div>
  );
}
