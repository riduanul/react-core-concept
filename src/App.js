import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const nayoks = ['Amir Khan', 'Salman Khan', 'Sharukh Khan','Salman Sha','Nawaz Uddin Khan'];
  const products = [
    {name:'Photoshop',price:'$99.99'},
    {name:'Ilustrator',price:'$59.99'},
    {name:'Pdf Reader',price:'$9.99'}
];
const celebrity = [
  {name:'sakib al hasan',job: 'cricketer'},
  {name:'sakib khan',job: 'actor'},
  {name:'Shafin Ahmed',job: 'singer'}
];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
    </ul>
    {
      products.map(pd => <Product product={pd}></Product>)
    }
     {
      celebrity.map(celeb => <Person person={celeb}></Person>)
    }
          
    </header>
    </div>
  );
}
function Users(){
  const [user, setUser] = useState([]);
  useEffect (() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => setUser(data))

  },[]);

  let users = user.slice(0,10);
  
  // console.log(users);
  return(
    <div>
      <h1>Dinamic Users:{users.length}</h1>
      {console.log(user) 
}
           <ul>{
       
      users.map(user => <li>{user.id}, {user.title}</li>)
     }
       </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width: '300px',
    float:'left',
    margin:'10px'
  }
  const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){

  return(
    <div style= {{border: '2px solid gold', margin:'10px', width:'400px'}}>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => {if (count >= 1) {setCount(count - 1)}}}>Decrease</button>
    </div>
  )
}


export default App;
