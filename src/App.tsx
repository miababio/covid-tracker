import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';


// This is still technically returning one thing, just on different lines; could use curly-braces + return like you know
// See src\components\Cards\Cards.tsx for an example
class App extends React.Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */