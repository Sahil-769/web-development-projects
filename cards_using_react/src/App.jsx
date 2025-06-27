import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import   Navbar from './component/navbar'

function App() {
  const [count, setCount] = useState(0)
  const [cards,setCard]=useState([])
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

    const Card=({card})=>{
      return(<>
      <div className="container">
        <div className="card">UserId : {card.userId}</div>
        <div className="card">Id : {card.id}</div>
        <div className="card">Title : {card.title}</div>
        <div className="card">Body : {card.body}</div>

      </div>
    </>)
    }

  return (
    <>
    <Navbar/>
    <div className='box'>
    {cards.map(card=>{
      return <Card key={card.title} card={card}/>
    })}
    </div>
    </>
  )
}

export default App
