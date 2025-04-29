import { useForm } from "react-hook-form";

import { Banner } from "./Banner";
import { Logo } from "./Logo";
import { AuthHeader } from "./AuthHeader";
import { AuthSend } from "./AuthSend";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Register() {
  const { register, handleSubmit } = useForm();
  const { signUp } = useContext(AuthContext);

  async function handleSignIn(data) {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    await signUp(data);
  }

  return (
    <main className="grid grid-cols-2 items-center text-white">
      <div
        className="flex flex-col h-screen"
        style={{ backgroundColor: "#391D34" }}
      >
        <Logo />

        <hr />
        <div className="w-5/6 p-5">
          <AuthHeader title="Cadastro" subtitle="Seu cadastro salva vidas." />

          <hr />
          <form className="grid py-2" onSubmit={handleSubmit(handleSignIn)}>
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
                {...register("name", { required: true })}
              />

              <label className="block font-normal py-1.5" htmlFor="email">
                Email:
              </label>
              <input
                className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                   outline-gray-300 placeholder:text-gray-400
                  focus:outline-2 focus:outline-indigo-600
                  sm:text-sm/6"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    className="block font-normal py-1.5"
                    htmlFor="password"
                  >
                    Senha:
                  </label>
                  <input
                    className="block rounded-md py-1.5 w-full px-3 text-base text-gray-900
                     outline-gray-300 placeholder:text-gray-400
                    focus:outline-2 focus:outline-indigo-600
                    sm:text-sm/6"
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                  />
                </div>

                <div>
                  <label
                    className="block font-normal py-1.5"
                    htmlFor="confirm-password"
                  >
                    Confirmar Senha:
                  </label>
                  <input
                    className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                     outline-gray-300 placeholder:text-gray-400
                    focus:outline-2 focus:outline-indigo-600
                    sm:text-sm/6"
                    type="password"
                    id="confirm-password"
                    {...register("confirmPassword", { required: true })}
                  />
                </div>
              </div>
              <AuthSend
                button="Salvar"
                link={{ title: "Já tenho uma conta", href: "/login" }}
              />
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
