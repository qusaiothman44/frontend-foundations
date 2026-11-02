import Prudect from "./Prudect"
const Prudects = () => {
    const list = [
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QgzOcNrJS09f_xO1b5wEc94uC4jFXSUi9NwF3mGGWg&s=10"
        },
          {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktZnGwGDxQv0cNQCZhkJ8mbFyW9pX0aPq4CR4bltTIA&s"
        }
    ]
  return (
    <div>
        {list.map((item)=>(
   <Prudect key={item.id} image={item.img}/>
        ))}
   
    </div>
  )
}

export default Prudects
