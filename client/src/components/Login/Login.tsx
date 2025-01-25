import { Link } from "react-router-dom";
import { Banner } from "./Banner";
import { Logo } from "./Logo";
import { AuthHeader } from "./AuthHeader";
import { AuthSend } from "./AuthSend";

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
          <AuthHeader title="Login" subtitle="Seu cadastro salva vidas." />

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
              <AuthSend button="Salvar" link="Já tenho uma conta" />
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center text-black">
        <Banner />
      </div>
    </main>
  );
}
