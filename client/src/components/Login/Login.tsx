import { Banner } from "./Banner";
import { Logo } from "./Logo";
import { AuthHeader } from "./AuthHeader";
import { AuthSend } from "./AuthSend";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    await signIn(data);
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
          <AuthHeader title="Login" subtitle="Seu cadastro salva vidas." />

          <hr />
          <form className="grid py-2" onSubmit={handleSubmit(handleSignIn)}>
            <div>
              <label className="block font-normal py-1.5" htmlFor="name">
                Email:
              </label>
              <input
                className="block rounded-md w-full px-3 py-1.5 text-base text-gray-900
                   outline-gray-300 placeholder:text-gray-400
                  focus:outline-2 focus:outline-indigo-600
                  sm:text-sm/6"
                type="email"
                id="email"
                {...register("email")}
              />
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
                  {...register("password")}
                />
              </div>
              <AuthSend
                button="Log In"
                link={{ title: "Cadastrar-se", href: "/login" }}
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
