import React from "react"
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {

    render() {
        return (
           
            <div>
                <Card>
                { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
                { this.props.temperature && <p>Temperature: { this.props.temperature }</p>}
                { this.props.humidity && <p>Humidity: { this.props.humidity }%</p>}
                { this.props.description && <p>Description: { this.props.description }</p>}
                { this.props.error && <p>{ this.props.error } </p>}
                </Card>
                
            </div>
        )
    }
}

export default Weather