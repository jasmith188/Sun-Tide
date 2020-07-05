import React from "react";
import "../../App.css"
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City" />
                    {/* <input type="text" name="country" placeholder="Country" /> */}
                        <select className="form-control" id="country">
                            <option>United States</option>
                            <option>Germany</option>
                            <option>Mexico</option>
                            <option>France</option>
                            <option>Spain</option>
                        </select>
                    
                    <button>Get Weather</button>
                </form>
            </div>
        )

    }
};

export default Form