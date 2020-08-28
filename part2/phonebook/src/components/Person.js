import React from 'react';
import personService from '../services/persons';

const Person = ({person}) => {
  return (
    <div>
        <li>{person.name} {person.number}</li>
      </div>
    )
  }
  
const Persons = ({filterName, persons, setPersons}) => {
  const deletePerson = (id) => {
    personService.remove(id).then(removedPerson => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const filteredPersons = () => {
    let exp = filterName.toLowerCase();
    return persons.filter(person => person.name.toLowerCase().includes(exp))
  }

  if (filterName) {
    persons = filteredPersons()
  }
  
  return (
    <div>
      {
        persons.map(person => {
          return(
            <div key={person.id}>
              <Person person={person}/> <button onClick={() => deletePerson(person.id)}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default Persons;
