import React from "react"
import Weather from "./components/Weather";
import DayCards from "./components/DayCards";
import Form from "./components/Form";
import Tide from "./components/Tide"
import "./App.css"

const API_KEY = "c5fc998f4951203abe90d5f6c1f39d7b";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
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
      <div>

        <h1 className="title">Weather App</h1>
        
          <div className="jumbotron fluid">
          <h5>Type a City and Country</h5>
            <Form getWeather={this.getWeather} />
            </div>
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
              {this.formatDayCards()}
              </div>
           
       
      


    )
  }
}

export default App