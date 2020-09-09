import React, {useState, useEffect} from 'react';
import personService from './services/persons';
import Persons from './components/Person';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ filterName, setFilterName ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService.getAll('http://localhost:3001/persons').then(returnedPersons =>{
      setPersons(returnedPersons)
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage}/>
      <div>
      filter shown with <input value={filterName} onChange={(event) => setFilterName(event.target.value)}/>
      </div>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setNotificationMessage}/>
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} setPersons={setPersons} /> 
    </div>
  )
}

export default App;
