import React from 'react';
import { TeamsTable } from './components/TeamsTable';

function App(): JSX.Element {
  return (
    <main className="min-h-screen h-screen text-center">
      <h1 className="mt-16 mb-5 font-bold text-3xl" id="home-title">
        LIST OF TEAMS
      </h1>
      <TeamsTable />
    </main>
  );
}

export default App;
