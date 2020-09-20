import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import covidImage from './images/covid.png';

// This is still technically returning one thing, just on different lines; could use curly-braces + return like you know
// See src\components\Cards\Cards.tsx for an example
class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async(country: any) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set the state
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={covidImage} alt="COVID-19" />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;