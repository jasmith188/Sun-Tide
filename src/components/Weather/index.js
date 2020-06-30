import React from "react"
import "../../App.css"

class Weather extends React.Component {

    render() {
        return (
            <div>
                <div className="current-weather">
                <h2>{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}</h2>
                    <div className="current-card">

                       
                        {this.props.temperature && <p>Current Temperature: {Math.round(this.props.temperature)}°F</p>}
                        {this.props.humidity && <p>Current Humidity: {this.props.humidity}%</p>}
                        {this.props.description && <p>Current Description: It is a {this.props.description}</p>}
                        {this.props.error && <p>{this.props.error} </p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather