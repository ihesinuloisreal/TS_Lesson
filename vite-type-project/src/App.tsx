
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clack',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
   

  return (
    <div className="App">
      <Greet name="Israel" message={100} isLoggedIn={true}/>
      {/* <Person name={personName}/> */}
      <PersonList name = {nameList}/>
      <Status status='success'/>
    </div>
  )
}

export default App
