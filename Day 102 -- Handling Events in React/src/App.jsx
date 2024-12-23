import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Harry")
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleMouseOver = () => {
    alert("Hey I am a mouse over")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div>

      {/* <input type="text" value={name} onChange={handleChange} /> */}
      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} placeholder="Email"/>
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} placeholder="Phone"/> 

      <p>Email: {form.email}</p>
      <p>Phone: {form.phone}</p>

    </>
  )
}

export default App

//  setForm() -->> is asyncronus that's why console.log() run before the setform even totally completed
