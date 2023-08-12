export default function ChildTwo({item}){


  return (<section className="my2 p-2">
    <h1>This is the Child Two component</h1>

    <div className="">
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
          <div>Qty: {item.quantity}</div>
        </div>
  </section>)
}