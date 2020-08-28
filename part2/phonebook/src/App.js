import React, {useState, useEffect} from 'react';
import personService from './services/persons';
import Persons from './components/Person';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    personService.getAll('http://localhost:3001/persons').then(returnedPersons =>{
      setPersons(returnedPersons)
    })
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with <input value={filterName} onChange={(event) => setFilterName(event.target.value)}/>
      </div>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} setPersons={setPersons}/> 
    </div>
  )
}

export default App;
