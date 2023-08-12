import { useState } from "react"
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";


const Items= [
  {
    name:"itemA",
    price:"$500",
    quantity:"3",
  },
  {
    name:"itemB",
    price:"$400",
    quantity:"3",
  },
  {
    name:"itemC",
    price:"$300",
    quantity:"2",
  },
  {
    name:"itemD",
    price:"$200",
    quantity:"1",
  }
]


export default function Parent(){
  const [items, setItems] = useState(Items)
  return (<>

    <section >
      <h1 className="flex-mid">This is the parent component</h1>
      <div className="my4">
        
        <ChildOne items={items}/>
        
        {
          items.map((item, index)=>{
            return ( <ChildTwo key={index} item={item} />)
          })
        }

       

      </div>

    </section>
  </>)
}
