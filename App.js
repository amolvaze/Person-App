import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  
  constructor(props) {
  
   super(props);

   console.log('[App.js] constructor')

   this.state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    //otherState: 'some other value'

    showPersons: false

  }


this.togglePersonsHandler = this.togglePersonsHandler.bind(this)

  }

  togglePersonsHandler = () => {

  console.log(" Clicked!")

  const doesshow = this.state.showPersons;
  this.setState({
    
    showPersons : !doesshow

  });

  }

   static getDerivedStateFromProps(props, state){

    console.log('[App.js] getDerivedStateFromProps' , props )

    return state;

  }



  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  componentWillMount(){

 console.log('[App.js] componentWillMount')


  }


  componentDidMount() {

   console.log('[App.js] componentDidMount')


  }

  nameChangedHandler = (event , id) => {
  
   const personIndex = this.state.persons.findIndex(p => {

     return p.id === id;

   })

 const person = {...this.state.persons[personIndex] };
 
 person.name = event.target.value;

 const persons = [...this.state.persons];

 persons[personIndex] = person;
   
    this.setState( {
      persons: persons
    } )
  }


  deletePersonHandler(personIndex) {
   
   const persons = this.state.persons.slice();
   persons.splice(personIndex, 1)
   this.setState( {
    
    persons : persons

   }

    );


  }



 shouldComponeUpdate(nextProps) {

  console.log('[App.js] shouldComponentUpdate')
  return true;

 }


 getSnapshotBeforeUpdate(prevProps, prevState){
 
 console.log('[App.js] shouldComponentUpdate')
  return true;

  
 }
 
  render () {
  
  console.log('[App.js] render ');

   const style = {
 
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer'
    

   };

   let persons = null;

   if(this.state.showPersons) {

     persons = (

         <div> 
           
       {
       this.state.persons.map((person, index) => {
         
        return <Person
        key = {person.id}
        click ={() => this.deletePersonHandler(index)}
        name = {person.name}
        age = {person.age}
        changed = {(event) => this.nameChangedHandler(event, person.id)}
                
        />
         
         
       })  
         
         
       }
       
          </div>
       

      );


   }



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
         style = {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }





  }
export default App;
