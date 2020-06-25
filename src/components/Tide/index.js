import React from "react"



class Tide extends React.Component {
   

    


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
            <h1>this is data</h1>
        </div>
    )
}
}

export default Tide;