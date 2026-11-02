import Prudect from "./Prudect"
const Prudects = () => {
    const list = [
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QgzOcNrJS09f_xO1b5wEc94uC4jFXSUi9NwF3mGGWg&s=10",
            title: "laptob 678",
            price:"899"
        },
          {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktZnGwGDxQv0cNQCZhkJ8mbFyW9pX0aPq4CR4bltTIA&s",
           title: "laptob 345",
            price:"569"}
    ]
  return (
    <div className="pro">
        {list.map((item)=>(
   <Prudect key={item.id} image={item.img} title={item.title} price={item.price}/>
        ))}
   
    </div>
  )
}

export default Prudects
