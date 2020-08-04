import React from "react";
import "../../App.css"
import Form from 'react-bootstrap/Form'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'

class TypeForm extends React.Component {
    render() {
        return (
          <Form>
             <Form.Group controlId="formBasicEmail">
                <form onSubmit={this.props.getWeather}>
                <Form.Label>Enter a City  </Form.Label>
                <Form.Control type="email" placeholder="City" />
                    <input type="text" name="city"/>
                    {/* <input type="text" name="country" placeholder="Country" /> */}
                    <Form.Control as="select" id="country">
                            <option>United States</option>
                            <option>Germany</option>
                            <option>Mexico</option>
                            <option>France</option>
                            <option>Spain</option>
                        </Form.Control>
                    
                    <button>Get Weather</button>
                </form>
                </Form.Group>
            </Form>
        )

    }
};

export default TypeForm