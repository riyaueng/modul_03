import React, { useState } from "react"

export default function Formular() {
  const [vorName, setVorName] = useState<string>("")
  const [nachName, setNachName] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [happy, setHappy] = useState<boolean>(false)

  const [shoes] = useState<string[]>(["Adidas", "Nike", "Puma", "Jordans"])

  interface IUser {
    username: string
    email: String
    age: number
  }

  const [userOne, setUserOne] = useState<IUser>({
    username: "",
    email: "",
    age: 0,
  })

  console.log(userOne)

  return (
    <>
      <form action="">
        <label htmlFor="vorname">Firstname</label>
        <input type="text" value={vorName} onChange={(event) => setVorName(event.target.value)} />

        <label htmlFor="nachname">Lastname</label>
        <input type="text" value={nachName} onChange={(event) => setNachName(event.target.value)} />

        <label htmlFor="age">Age</label>
        <input type="text" value={age} onChange={(event) => setAge(Number(event.target.value))} />
        <br />
        <br />
        <label htmlFor="happy">Are you happy?</label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={happy}
          onChange={(event) => {
            setHappy(event?.target.checked)
          }}
        />
      </form>

      <div>Firstname: {vorName}</div>
      <div>Lastname: {nachName}</div>
      <div>Age: {age}</div>
      <p>Are you happy? {happy ? "😀" : "😞"} </p>
      <div>
        <ul>
          {/* Wenn man mit () arbeitet, dann brauche wir kein return, aber wenn wir mit {} dann ist return ein muss */}

          {shoes.map((shoe: string, index: number) => {
            return <li key={index}>{shoe}</li>
          })}
        </ul>
      </div>
    </>
  )
}
