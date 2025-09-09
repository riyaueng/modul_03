import React, { useState } from "react"

interface IUser {
  username: string
  email: string
  tel: string
}

export default function Login() {
  // const [username, setusername] = useState<string>("");

  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    tel: "",
  })

  const emailFunc = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value })
  }

  const loginFunc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(user)
    console.log("User wurde erfolgreich eingeloggt.")
  }

  return (
    <div className="max-auto flex">
      <div className="bg-[url(/funny_bg.jpeg)] w-lvw h-lvh max-auto bg-no-repeat"></div>
      <h3 className="text-2xl mb-6">Login</h3>
      {/* <label htmlFor="">username</label>
      <input 
      type="text" 
      name="username" 
      id=""
      value={username}
      className="w-full rounded-md border border-slate-300 h-10"
      onChange={(e) => setusername(e.target.value)}
      /> */}

      <form className="space-y-4 w-full text-blue-700" onSubmit={loginFunc}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={user.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, username: e.target.value })}
            className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={emailFunc}
            value={user.email}
            className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="tel">Tel</label>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, tel: e.target.value })}
            value={user.tel}
            className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:bg-yellow-400"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-600 hover:bg-red-700 text-white px-4 py-4 font-medium">
          Einloggen
        </button>
      </form>
    </div>
  )
}
