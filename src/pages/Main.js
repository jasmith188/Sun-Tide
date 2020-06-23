import React from "react"
import Weather from "../components/Weather";
import Tide from "../components/Tide";
import Form from "../components/Form";

const API_KEY = "c5fc998f4951203abe90d5f6c1f39d7b";

class Main extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
        
    }
    render() {
        return (
            <div>
                <Weather />
                <Tide />
                <Form getWeather={this.getWeather}/>
            </div>


        )
    }
}

export default Main