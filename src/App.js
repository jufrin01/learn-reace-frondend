import React , {useState} from 'react';
import './App.css';
import Heading from "./components/Heading";


function App() {

    const [profiles, setProfiles] = useState([

        {
            id: 1,
            name: "Huua",
            age: 40
        },
        {
            id: 2,
            name: "Rajib",
            age: 28
        },
        {
            id: 3,
            name: "Jufrin",
            age: 27
        },
        {
            id: 4,
            name: "Kamal",
            age: 35
        },
        {
            id: 5,
            name: "Davit",
            age: 35
        }

    ])
  return (
    <div className="App">
        {
         profiles.map(profile => {
            // const {id, name, age} = profile;
           //  return <Heading key={id} name={name} age={age}> </Heading>
             return (
                 <Heading profile={profile}> </Heading>
             )
         })
        }

    </div>
  );
}

export default App;
