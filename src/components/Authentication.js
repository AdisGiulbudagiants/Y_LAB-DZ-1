import { useState } from "react"
import fetchMock from "fetch-mock"
import styles from "./Authentication.module.css"

const Authentication = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)
  const [response, setResponse] = useState(null)

  const EMAIL = "example@mail.ru"
  const PASSWORD = "Example2023"

  async function handleSubmit(el) {
    el.preventDefault()

    const data = { email, password }

    try {
      if (email === "") return alert("You missed Email field!")
      if (password === "") return alert("You missed Password field!")
      if (check === false)
        return alert("You do not agree with non-existent rules!")

      if (email === EMAIL && password === PASSWORD) {
        fetchMock.mock("https://example.com", {
          body: { yourEmail: email, yourPassword: password },
          status: 200,
        })

        const response = await fetch("https://example.com", {
          method: "POST",
          body: JSON.stringify(data),
        })
        if (!response.ok) throw new Error("Network response was not ok.")

        const responseData = await response.json()
        setResponse(responseData)
        return alert(
          `All good! You are logged in.\nYour Email: \n${email} \nand your Password is \n${password}`
        )
      } else {
        return alert("Email or Password is incorrect")
      }
    } catch (error) {
      console.error(error)
    } finally {
      fetchMock.restore()
    }
  }

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <h1 className={styles.header}>Sign up</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
          <span>I agree with non-existent rules</span>
        </label>
        <button onClick={handleSubmit} type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Authentication
