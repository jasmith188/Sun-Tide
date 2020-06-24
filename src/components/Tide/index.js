import React from "react"
import Card from 'react-bootstrap/Card'

const API_KEY = "dad127b0-b3d6-11ea-a563-0242ac130002-dad12864-b3d6-11ea-a563-0242ac130002"


class Tide extends React.Component {
    state = {
        lat: undefined,
        lng: undefined
    }

    


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            console.log(position);
            

        });
    }


    render() {
        return (

            <div>
                
            </div>
        )
    }
}

export default Tide;