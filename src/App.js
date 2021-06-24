import './App.css';
import axios from 'axios';
import { Component } from 'react';
require('dotenv').config();

class App extends Component {
  constructor() {
    super()
    this.state = {
      pollution: { }
    }
  }
  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=41.38879&lon=2.15899&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then(res => this.setState({ pollution: { index: res.data.list[0].main.aqi } })); 
  }

  render() {
    const { pollution } = this.state;
    return (
      <div>
        Home page
        <div className="border border-gray-900 w-40 rounded-md p-3">
          <p>Barcelona</p>
          <p className="pb-2">Pollution: </p>
          <div className="flex">
            <div className={`bg-blue-500 h-5 w-5 rounded-full ${ pollution.index === 1 && 'border-4' } border-gray-900`} />
            <div className={`bg-green-600 h-5 w-5 rounded-full ${ pollution.index === 2 && 'border-4' } border-gray-900`} />
            <div className={`bg-yellow-300 h-5 w-5 rounded-full ${ pollution.index === 3 && 'border-4' } border-gray-900`} />
            <div className={`bg-yellow-600 h-5 w-5 rounded-full ${ pollution.index === 4 && 'border-4' } border-gray-900`} />
            <div className={`bg-red-500 h-5 w-5 rounded-full ${ pollution.index === 5 && 'border-4' } border-gray-900`} />
            </div>
          </div>
      </div>
    )
  }
}

export default App;