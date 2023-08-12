export default function ChildOne({items}){
  console.log(items);
  return (<section className="p-2">
    <h1>This is the Child One component</h1>

    {items &&
      items.map((item, index)=>{
        return (<div className="my4" key={index}>
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
          <div>Qty: {item.quantity}</div>
        </div>)
      })

    }
    
  </section>)
}