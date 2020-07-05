import React from "react"
import "../../App.css"

const Weather = (props) => (
<div>
                <div className="current-weather">
                    <h2>{props.city && props.country && <p>Location: {props.city}, {props.country}</p>}</h2>
                    <div className="current-card">


                        {props.temperature && <p>Current Temperature: {Math.round(props.temperature)}°F</p>}
                        {props.feelsLike && <p>Feels Like: {Math.round(props.feelsLike)}°F</p>}
                        {props.humidity && <p>Current Humidity: {props.humidity}%</p>}
                        {props.description && <p>Current Description: {props.description}</p>}
                        {props.icon && <p>icon here:{props.icon}</p>}
                        {props.error && <p>{this.props.error} </p>}
                    </div>
                </div>
            </div>
);

            
        
    


export default Weather;