import React, {useState} from 'react';
import personService from '../services/persons';

const PersonForm = ({persons, setPersons, setMessage}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const savePerson = (event) => {
    event.preventDefault();

    const person = {
      name: newName,
      number: newNumber
    }

    const existing_person = getPerson()

    if (existing_person) {
      let update = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (update) {
        personService.update(existing_person.id, person).then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id? person : returnedPerson))
          
          setMessage(`Number changed to ${returnedPerson.number}`)

          setTimeout(() => setMessage(null), 5000)
        })
      }
    } 
    else {
      personService.create(person).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))

        setMessage(`Added ${returnedPerson.name}`)

        setTimeout(() => setMessage(null), 5000)

      })
    }
    setNewName('')
    setNewNumber('')
  }

  const getPerson = () => {
    return persons.find(person => person.name === newName);
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