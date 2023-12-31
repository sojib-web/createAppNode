import React,{Component} from 'react';
import './App.css';
import Book from './components/Book';

// class Component
class App extends Component{
  state = {
    books : [
      {bookName: "1984", writer:"George Orwell"},
      {bookName: "The Da Vinci Code", writer :  "Dan Brown" },
      {bookName: "The Alchemist",writer :"Paulo Colho" }
    ],
    otherProp: "I am other props"
  }
  changeBookState = (newBookName) =>{
    this.setState({
      books : [
        {bookName: newBookName ,writer :"George Orwell"},
        {bookName: "The Da Vinci Code",   writer :"Dan Brown" },
        {bookName: "Metmorphosis",        writer :"Franz Kafka" }
      ]
    });
  }

  changeInputState =  event =>{
    this.setState({
      books : [
        {bookName: event.target.value ,writer :"George Orwell"},
        {bookName: "The Da Vinci Code",   writer :"Dan Brown" },
        {bookName: "Metmorphosis",        writer :"Franz Kafka" }
      ]
    });
  }
  render() {
        const style = {
          border: "1px solid red",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "White"
        }

    console.log(this.state)
    return (
          <div className="App">
           <h1 style={style}>Book List </h1>

          
            <button onClick={ () => this.changeBookState("Nineteen Eighty-Four")}>Changes State </button>
            <input type='text' onChange={this.changeInputState}/>


           <Book bookName ={this.state.books[0].bookName} writer = {this.state.books[0].writer} inputName={this.changeInputState}/>
           <Book bookName ={this.state.books[1].bookName} writer = {this.state.books[1].writer}/>
           <Book bookName ={this.state.books[2].bookName} writer = {this.state.books[2].writer} change={this.changeBookState.bind(this, "Nineteen Eighty 4")}/>

           


          </div>
        );
  }
}


export default App;
