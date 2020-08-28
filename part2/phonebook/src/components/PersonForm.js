import React, {useState} from 'react';
import personService from '../services/persons';

const PersonForm = ({persons, setPersons}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const savePerson = (event) => {
    event.preventDefault();

    if (!containsName()){
      const person = {
        name: newName,
        number: newNumber
      }

      personService.create(person).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    
  }

  const containsName = () => {
    const names = persons.map(person => person.name);
  
    return names.includes(newName)
  }

  return (
    <div>
      <form onSubmit={savePerson}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm;