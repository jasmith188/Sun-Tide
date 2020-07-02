import React from 'react';
var moment = require('moment');

class DayCards extends React.Component {
  render() {
    let newDate = new Date();
    const weekday = this.props.day.dt * 1000
    newDate.setTime(weekday)

    const imgURL = "owf owf-" + this.props.day.weather[0].id + "owf-5x red"

    return (
      <div>
        <div className="">
          <div className="card">

            <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
            <p className="text">{moment(newDate).format('MMMM Do, h:mm a')}</p>
            <i className={imgURL}></i>
            <h1>{Math.round(this.props.day.main.temp)}°F</h1>
            <h5>Feels Like: {Math.round(this.props.day.main.feels_like)}°F</h5>
            <div className="card-body">
              <p className="card-text">{this.props.day.weather[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DayCards;