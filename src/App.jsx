import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Home from './components/landingPage/Home'
// import NavBar from './components/landingPage/NavBar'
// import Footer from './components/landingPage/Footer'
// import Parent from './components/Interactions/Parent'
import {  Routes, Route } from 'react-router'
import PostDetails from './components/blog/PostDetails'
import { extPosts } from './components/blog/data'
import { LandingPosts } from './components/blog/LandingPosts'



extPosts


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPosts />} />
        <Route path='/:id' element={<PostDetails />} />
      </Routes>
    </>
  )
}

export default App


export function OurApp(){
  const [test, setTest] = useState(0)
  return (
    <>
      <div>This is  our app in a component</div>
      <button onClick={()=>setTest(test+1)}>{test}</button>
    </>
  )

}



export const InitialContent =()=>{
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"  rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank"  rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>
  )
}