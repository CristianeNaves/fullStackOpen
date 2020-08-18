import React, {useState} from 'react';

const Person = ({name, number}) => {
  return (
    <div>
      <li>{name} {number}</li>
    </div>
  )
}

const Persons = ({persons}) => {
  return (
    <div>
      {
        persons.map((person,i) => <Person key={i} name={person.name} number={person.number}/>)
      }
    </div>
  )
}

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
      
      setPersons(persons.concat(person));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    
    setNewName('');
    setNewNumber('');
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

const Filter = ({filterName, setFilterName}) => {
  return (
    <div>
      filter shown with <input value={filterName} onChange={(event) => setFilterName(event.target.value)}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ filterName, setFilterName ] = useState('')

  const filteredPersons = () => {
    console.log('oi')
    let exp = filterName.toLowerCase();
    return persons.filter(person => person.name.toLowerCase().includes(exp))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {
        filterName? 
        <Persons persons={filteredPersons()}/> 
        :
        <Persons persons={persons}/>
        }
      </ul>
      
    </div>
  )
}

export default App;
