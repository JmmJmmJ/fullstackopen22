import { useState, useEffect } from "react";
import personService from "./services/persons";

const PersonForm = ({
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        <br></br>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({ persons, del }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.name} person={person} del={() => del(person.id)} />
      ))}
    </ul>
  );
};

const Person = ({ person, del }) => {
  return (
    <li>
      {person.name} {person.number} <button onClick={del}>delete</button>
    </li>
  );
};

const Notification = ({ message, clas }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (!persons.find((person) => person.name === newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((returnedNote) => {
        setPersons(persons.concat(returnedNote));
        setNewName("");
        setNewNumber("");
      });
      setErrorMessage(`Added ${newName}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else {
      setErrorMessage(`${newName} is already added to phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const del = (id) => {
    const remove = persons.find((person) => person.id === id).name;
    if (window.confirm(`Delete ${remove}?`)) {
      personService.del(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
      setErrorMessage(`Removed ${remove}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} del={del} />
    </div>
  );
};

export default App;
