import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { Logo } from "./Logo";

export function Login() {
  return (
    <main className="grid grid-cols-2 items-center text-white">
      <div
        className="flex flex-col h-screen"
        style={{ backgroundColor: "#391D34" }}
      >
        <Logo />

        <hr />
        <div className="w-5/6 p-5">
          <div className="py-2">
            <h1 className="font-semibold">Cadastre-se</h1>
            <h2 className="font-normal">Seu cadastro salva vidas.</h2>
          </div>
          <hr />
          <form className="grid py-2" action="">
            <div>
              <label className="block font-normal py-1.5" htmlFor="name">
                Nome:
              </label>
              <input
                className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                   outline-gray-300 placeholder:text-gray-400
                  focus:outline-2 focus:outline-indigo-600
                  sm:text-sm/6"
                type="text"
                id="name"
                name="name"
              />

              <label className="block font-normal py-1.5" htmlFor="email">
                Email:
              </label>
              <input
                className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                   outline-gray-300 placeholder:text-gray-400
                  focus:outline-2 focus:outline-indigo-600
                  sm:text-sm/6"
                type="text"
                id="email"
                name="email"
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-normal py-1.5" htmlFor="email">
                    Senha:
                  </label>
                  <input
                    className="block rounded-md py-1.5 w-full px-3 text-base text-gray-900
                     outline-gray-300 placeholder:text-gray-400
                    focus:outline-2 focus:outline-indigo-600
                    sm:text-sm/6"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>

                <div>
                  <label className="block font-normal py-1.5" htmlFor="email">
                    Confirmar Senha:
                  </label>
                  <input
                    className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                     outline-gray-300 placeholder:text-gray-400
                    focus:outline-2 focus:outline-indigo-600
                    sm:text-sm/6"
                    type="confirm-password"
                    id="confirm-password"
                    name="confirm-password"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm font-medium rounded-lg px-4 py-2"
                >
                  Salvar
                </button>
                <Link
                  to="/register"
                  className="text-sm text-blue-400 hover:text-blue-500 hover:underline"
                >
                  Já tenho uma conta
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center text-black">
        <Banner />
        <h1>ADO.TE</h1>
        <h2>Nos ajude a salvar vidas</h2>
      </div>
    </main>
  );
}
