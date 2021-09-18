import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';


function App() {


  return (
    <div className="App">
      <Photos></Photos>
    </div>
  )




  /* return (
    <div className="App">
      <Count></Count>
      <ExternalUsers></ExternalUsers>
    </div>
  ); */
}

function Photos() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setPhotos(data.slice(0, 100)))
  }, [])

  return (
    <div>
      <h2>User Photos</h2>
      {
        photos.map(photo => <ShowPhotos id={photo.id} title={photo.title} url={photo.url}></ShowPhotos>)
      }
    </div>
  )
}
function ShowPhotos(props) {

  return (
    <div>
      <h2>{props.id}</h2>
      <p>{props.title}</p>
      <img src={props.url} alt="" />
    </div>
  )
}





























/* // function ExternalUsers() {
//   const [users, setUsers] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])

//   return (
//     <div>
//       <h2>ExternalUsers</h2>
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   )
// }
// function User(props) {
//   return (
//     <div className="counter">
//       <h3>{props.name}</h3>
//       <p>{props.email}</p>
//     </div>
//   )
// }


// function Count() {
//   const [count, setCount] = useState(34);
//   const decrease = () => {
//     const newCount = count - 1;
//     setCount(newCount)
//   }
//   const increase = () => {
//     const newCount = count + 1;
//     setCount(newCount)
//   }
//   return (
//     <div className="counter">
//       <h2>Count: {count}</h2>
//       <button onClick={decrease}>decrease - </button>
//       <button onClick={increase}>Increase + </button>

//     </div>
//   )
// } */


export default App;
