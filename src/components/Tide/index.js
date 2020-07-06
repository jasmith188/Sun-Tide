import React from "react"



class Tide extends React.Component {
    constructor() {
        super()

        this.state = {
            latitude: '',
            longitude: '',
            url: `https://api.stormglass.io/v2/tide/sea-level/point?lat=${lat}&lng=${lng}&start=2020-02-24&end=2020-02-25`
        }

        this.getMyLocation = this.getMyLocation.bind(this)
    }

    componentDidMount() {
        this.getMyLocation()
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,

                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })


            })
        }

    }

    render() {
        const { latitude, longitude } = this.state

        return (
            <div>
                <input type="text" value={latitude} />
                <input type="text" value={longitude} />
            </div>
        )
    }
}


export default Tide

