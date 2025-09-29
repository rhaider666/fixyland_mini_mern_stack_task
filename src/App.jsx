import { Button } from 'antd'
import { useState } from 'react'
import { FaRocket } from "react-icons/fa";
function App() {

  return (
    <>
    <Button type="primary">Button</Button>
<FaRocket/>
      <h1 className=' text-primary'>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-red-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
