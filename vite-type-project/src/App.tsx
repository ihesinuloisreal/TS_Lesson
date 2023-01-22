
import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Input } from './components/Input'
import { Osca } from './components/Osca'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Login } from './components/state/Login'
import { User } from './components/state/User'

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne',
  // }
  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clack',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]

  // const handleClick = (event) => {
  //   let a = 5
  //   let b = 5
  //   console.log(a+b, event)
  // }
   

  return (
    <div className="App">
      {/* <Greet name="Israel" isLoggedIn={true}/> */}
      {/* <Person name={personName}/> */}
      {/* <PersonList name = {nameList}/>
      <Status status='success'/>
      
      <Osca>
        <Heading>Oscar goes to Leonardo Siscap</Heading>
      </Osca> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }}/>
      <Input value="" handleChange={event=>console.log(event)} />
      <Container style={{ border: '1px solid black', padding: '1rem' }}/> */}
      {/* <Login/> */}
      <User/>
    </div>
  )
}

export default App
