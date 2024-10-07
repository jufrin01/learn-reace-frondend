import React from 'react';
import './App.css';
import Table from "./components/Table";
import Title from "./components/Title";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
        <Title/>
        <Form/>
        <Table/>
    </div>
  );
}

export default App;
