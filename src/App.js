import React from "react"
import Weather from "./components/Weather";
import DayCards from "./components/DayCards";
import Form from "./components/Form";
// import Tide from "./components/Tide"
import "./App.css"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const API_KEY = "c5fc998f4951203abe90d5f6c1f39d7b";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    feelsLike: undefined,
    error: undefined,
    dailyData: []
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //     console.log(position);


  //   });
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    // const api_call2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
    // const data2 = await api_call2.json();
    if (city && country) {
      console.log(this.state);
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        feelsLike: data.list[0].main.feels_like,
        error: "",
        dailyData: dailyData
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        feelsLike: undefined,
        error: "Please type a value...",
        fullData: undefined,
        dailyData: undefined
      });
    }
    // if (city && country) {
    //     console.log(data.list);
    //     this.setState({
    //         temperature: data.list[0].temp,
    //         city: data.name,
    //         country: data.city.country,
    //         humidity: data.main.humidity,
    //         description: data.weather.description,
    //         error: ""
    //     });
    // } else {
    //     this.setState({
    //         temperature: undefined,
    //         city: undefined,
    //         country: undefined,
    //         humidity: undefined,
    //         description: undefined,
    //         error: "Please type a value..."
    //     });
    // }
  }

  formatDayCards = () => {
    return this.state.dailyData.map((day, index) => <DayCards day={day} key={index} />)
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
        <div className="title">Weather App</div>
        <br />
        <div className="sub-title">Get Your Current & 5 Day Forecast</div>
        </div>
        <br />
        <br />
        <div>
          {/* <div className="top-form">Type a City and Country</div> */}
          <Form getWeather={this.getWeather} />
          <br />
          <br />
          <Card>
            <Weather classname="current-weather"
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              feelsLike={this.state.feelsLike}
              error={this.state.error}
            />
          </Card>
        </div>
        <br />
        <br />
        <CardDeck>
          {this.formatDayCards()}
        </CardDeck>
      </div>






    )
  }
}

export default App