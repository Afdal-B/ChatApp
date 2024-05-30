import React from "react";
import axios from "axios";
function AuthPage(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://chat-app-backend-rouge.vercel.app/authenticate", {
        username: value,
      })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };
  return (
    <div>
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex">
          <form onSubmit={onSubmit}>
            <h1 className="text-6xl font-bold text-center text-gray-800">
              Bienvenue
            </h1>
            <div className="text-xl tracking-tight text-center">
              Entrez votre nom utilisateur
            </div>
            <div className="flex flex-col mt-8 items-center content-center">
              <label
                htmlFor="Username"
                className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Username"
                  name="username"
                  className="peer border-none h-12 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                  placeholder="Username"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white rounded p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Username
                </span>
              </label>
              <button
                type="submit"
                className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Let's GO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
