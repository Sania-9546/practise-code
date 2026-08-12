import UserCard from './assets/component/UserCard.jsx'
import './App.css'
import sania from './assets/sania.jpg'
import JaneSmith from './assets/janeSmith.jpg'
import JohnDoe from './assets/JohnDoe.png'
function App() {
  return (
    <div id='user-container'>
      <UserCard name="Sania Nausheen" desc="Software Engineer" image={sania} style={{color: 'black'}}/>
      <UserCard name="John Doe" desc="Product Manager" image={JohnDoe} style={{color: 'black'}}/>
      <UserCard name="Jane Smith" desc="UX Designer" image={JaneSmith} style={{color: 'black '}}/>
    </div>
  )
}
export default App
