import { useState } from "react"
import styles from "./Authentication.module.css"

const Authentication = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  return (
    <div className={styles.main}>
      <form className={styles.form}>
        <h1 className={styles.header}>Sign up</h1>
        <input type="email" name="" value={email} placeholder="Email" />
        <input type="password" name="" value={pass} placeholder="Password" />
        <label className={styles.checkbox}>
          <input type="checkbox" name="" value="" />
          <span>I agree with non-existent rules</span>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Authentication
