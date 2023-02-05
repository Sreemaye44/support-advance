import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Navbar from './components/Navbar/Navbar';

let name: string;
let age: number | string; //union of types
let isStudent: boolean;
let hobbies: number[];
let role: [number, string];

type Person={
  name: string;
  age?: number;
}
let person: Person={
  name: 'Piyush',

}
let personName: unknown;
let lotsOfPeople: Person[];
let printName: (name: string)=>void; //number/string/never(does not return anything)

// function printName(name: string){
  
// }


function App() {
  return (
    <div className="App">
     <SocialIcons></SocialIcons>
     <Navbar></Navbar>
    </div>
  );
}

export default App;
