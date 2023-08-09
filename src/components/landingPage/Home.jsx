import { useState } from  "react"


export default function Home(){
  const [name, setName] = useState("")
   const computeName=({target:{value}})=>{
    setName(value)
   }
return(<>
  <section style={{minHeight:"95vh", background:"teal", paddingTop: "90px"}}>
    <h1>This is the Home page</h1>
    {name? <div>

      <h3>Hey Dear {name}!</h3>
      </div>:
      <div>
        <h3>Hey Dear user!</h3>
        <p>We wish to Address you properly, could you please provide your name below?</p>
        <input type="text" onChange={computeName} />
      </div> 
    }
  </section>
</>)
}