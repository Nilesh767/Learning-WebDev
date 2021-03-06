import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Nilesh", age: 21 },
      { id: "a", name: "Other name", age: 20 },
      { id: "2b", name: "some name", age: 12 },
    ],
    otherstate: "some other state",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((per) => {
      return per.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedclasses = [];
    if (this.state.persons.length <= 2) {
      assignedclasses.push(classes.red); // red
    }
    if (this.state.persons.length <= 1) {
      assignedclasses.push(classes.bold); // red + bold
    }

    return (
      <div className={classes.App}>
        <h1>Henlo... hooman!!!</h1>
        <p className={assignedclasses.join(" ")}>Working! :)</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
