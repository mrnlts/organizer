import axios from 'axios';
import { Component } from 'react';
import DailyJoke from './components/DailyJoke';
import DailyPoem from './components/DailyPoem';
import Weather from './components/Weather';
require('dotenv').config();

class App extends Component {
  constructor() {
    super()
    this.state = {
      pollution: {},
      temp: 0,
      weather: '',
      dailyJoke: ''
    }
  }

  componentDidMount() {
    axios.get('https://poetrydb.org/random')
      .then(res => this.setState({ dailyPoem: res.data[0] }))
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=41.38879&lon=2.15899&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then(res => this.setState({ pollution: { index: res.data.list[0].main.aqi } }));
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=41.38879&lon=2.15899&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then(res => {
        const forecast = res.data;
        const temp = forecast.current.temp;
        const weather = forecast.current.weather[0].main;
        this.setState({ temp, weather });
      })
    axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
      .then(res => this.setState({ dailyJoke: res.data.joke }))
  }

  render() {
    const { pollution, temp, weather, dailyJoke, dailyPoem } = this.state;
    return (
      <div className="p-5 flex">
        <Weather pollution={pollution} temp={temp} weather={weather} />
        <DailyJoke joke={dailyJoke} />
        <DailyPoem poem={dailyPoem} />
      </div>
    )
  }
}

export default App;