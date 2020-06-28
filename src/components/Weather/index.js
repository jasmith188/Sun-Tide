import React from "react"

class Weather extends React.Component {

    render() {
        return (
            <div>
                <div className="col-sm-2">
                <h1>{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}</h1>
                    <div className="card">

                       
                        {this.props.temperature && <p>Temperature: {Math.round(this.props.temperature)}</p>}
                        {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                        {this.props.description && <p>Description: {this.props.description}</p>}
                        {this.props.error && <p>{this.props.error} </p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather