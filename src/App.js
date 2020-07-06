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
        // icon: data.list[0].weather[0].icon,
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
        // icon: undefined,
        error: "Please type a value...",
        fullData: undefined,
        dailyData: undefined
      });
    }
  }

  formatDayCards = () => {
    return this.state.dailyData.map((day, index) => <DayCards day={day} key={index} />)
  }
  render() {
    return (
      <div className="container">
        <div className="title-card">
          <div className="title">Sun Tide</div>
          <br />
          <div className="sub-title">Get Your Current & 5 Day Forecast</div>
          <br />
        <br />
        </div>
        <br />
        <br />
        <div className="top-form">
          {/* <div className="top-form">Type a City and Country</div> */}
          <div className="row">
            <div className="col-lg-6">
          <Form getWeather={this.getWeather} />
          </div>
          <br />
          <br />
          <div className="col-lg-6">
          <Card className="current-weather-card">
            <Weather classname="current-weather"
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              feelsLike={this.state.feelsLike}
              // icon={this.state.icon}
              error={this.state.error}
            />
          </Card>
          </div>
          </div>
        </div>
        <br />
        <br />
        <CardDeck>
          {this.formatDayCards()}
        </CardDeck>
        {/* <Tide /> */}
      </div>
    )
  }
}

export default App