import { Banner } from "./banner";

export function Login() {
  return (
    <main className="flex text-white">
      <div className="w-1/2" style={{ backgroundColor: "#391D34" }}>
        <h1>Cadastre-se</h1>
        <h2>Seu cadastro salva vidas.</h2>
        <hr />
        <form className="grid" action="">
          <div>
            <label className="block font-medium" htmlFor="first-name">
              Nome:
            </label>
            <input
              className="block rounded-md px-3 py-1.5 text-base text-gray-900 outline-1
                -outline-offset-1 outline-gray-300 placeholder:text-gray-400
                focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                sm:text-sm/6"
              type="text"
              id="first-name"
              name="first-name"
            />
          </div>
        </form>
      </div>
      <Banner />
    </main>
  );
}
