import React from "react"
import { usePosition } from 'usePosition';


export const Tide = () => {


    const { latitude, longitude, error } = usePosition();
    console.log(usePosition);

    return (
        <code>
            latitude: {latitude}<br />
      longitude: {longitude}<br />
      error: {error}
        </code>
    );
}

export default Tide

