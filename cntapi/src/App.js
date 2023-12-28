import { useState } from 'react';
import UserProvider, { UserContext } from './contexts/user';
import Alunos from './components/Alunos';

function App() {

  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;
