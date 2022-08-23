import React from 'react';
import Form from './components/Form';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form />
        </main>
      </>
    );
  }
}

export default App;
