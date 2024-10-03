import React from'react';

function Heading(props) {
     // console.log(props);
   // const {name , age} = props; // This will print the object in the Heading component
    const { name , age } = props.profile; // This will print the object in the Heading component
   // console.log(props); // This will print the text in the Heading component
    return (
        <div>
            <h1>Welcome Datang , {name}</h1>
            <p>Age : {age}</p>
            <hr/>
        </div>
    )
}

export default Heading;

