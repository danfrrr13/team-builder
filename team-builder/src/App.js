import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import data from './data';
import './App.css';

function App() {
  
  const [members, setMembers] = useState(data);

  const addNewMember = newMember => {
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form add={addNewMember} />
      <List members={members} />
    </div>
  );
}

export default App;
