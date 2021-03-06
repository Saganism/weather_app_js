import React, { Component } from "react";
import Info from "./info";
import TemChart from "./Charts/TemChart";
import Today from "./today";
import snow from './wallpapers/snow.jpg'
import sleet from './wallpapers/sleet.jpg'
import hail from './wallpapers/hail.jpg'
import thunderstorm from './wallpapers/thunderstorm.jpg'
import heavyrain from './wallpapers/heavyrain.jpg'
import lightrain from './wallpapers/lightrain.jpeg'
import showers from './wallpapers/showers.jpg'
import heavycloud from './wallpapers/heavycloud.jpg'
import lightcould from './wallpapers/lightcloud.jpg'
import clear from './wallpapers/clear.jpg'
import WindSpeed from "./Charts/WindSpeed";
import Humidity from "./Charts/Humidity";
import LineChart from "./Charts/LineChart";

export default class container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wo: "1979455",
      isLoading: true,
      data: [],
      cityName: "Baghdad",
      min_temp: [],
      max_temp: [],
      the_temp: [],
      wind_speed: [],
      air_pressure: [],
      humidity: [],
      visibility: [],
      predictability: [],
      date: [],
      parent: {},
      title: '',
      sun_rise: '',
      sun_set: '',
      wallpaper: snow
    };
  }

  // first render
  componentDidMount() {
    fetch("https://www.metaweather.com/api/location/1979455/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isLoading: false });
        {
          var dayNum = new Date();

          var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

          let min_temp = [];
          let max_temp = [];
          let the_temp = [];
          let wind_speed = [];
          let air_pressure = [];
          let humidity = [];
          let visibility = [];
          let predictability = [];
          let date = [];
          // Split data in individual arrays of first rendering
          for (var i = 0; i < data["consolidated_weather"].length; i++) {
            min_temp.push(data["consolidated_weather"][i]["min_temp"]);
            max_temp.push(data["consolidated_weather"][i]["max_temp"]);
            the_temp.push(data["consolidated_weather"][i]["the_temp"]);
            wind_speed.push(data["consolidated_weather"][i]["wind_speed"]);
            air_pressure.push(data["consolidated_weather"][i]["air_pressure"]);
            humidity.push(data["consolidated_weather"][i]["humidity"]);
            visibility.push(data["consolidated_weather"][i]["visibility"]);
            date.push(
              //               get days name by date
              days[
              new Date(
                data["consolidated_weather"][i]["applicable_date"]
              ).getDay()
              ]
            );

            predictability.push(
              data["consolidated_weather"][i]["predictability"]
            );
          }

          this.setState({
            min_temp: min_temp,
            max_temp: max_temp,
            the_temp: the_temp,
            wind_speed: wind_speed,
            humidity: humidity,
            visibility: visibility,
            predictability: predictability,
            air_pressure: air_pressure,
            date: date,
            data: data["consolidated_weather"][0],
            parent: data["parent"],
            title: data['title'],
            sun_rise: data['sun_rise'],
            sun_set: data['sun_set']
          });
        }
      });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.wo !== this.state.wo) {
      fetch("https://www.metaweather.com/api/location/" + this.state.wo)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ isLoading: false });
          {
            var dayNum = new Date();

            var days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];

            let min_temp = [];
            let max_temp = [];
            let the_temp = [];
            let wind_speed = [];
            let air_pressure = [];
            let humidity = [];
            let visibility = [];
            let predictability = [];
            let date = [];
            // Split data in individual arrays of another  rendering
            for (var i = 0; i < data["consolidated_weather"].length; i++) {
              min_temp.push(data["consolidated_weather"][i]["min_temp"]);
              max_temp.push(data["consolidated_weather"][i]["max_temp"]);
              the_temp.push(data["consolidated_weather"][i]["the_temp"]);
              wind_speed.push(data["consolidated_weather"][i]["wind_speed"]);
              air_pressure.push(
                data["consolidated_weather"][i]["air_pressure"]
              );
              humidity.push(data["consolidated_weather"][i]["humidity"]);
              visibility.push(data["consolidated_weather"][i]["visibility"]);
              date.push(
                days[
                new Date(
                  data["consolidated_weather"][i]["applicable_date"]
                ).getDay()
                ]
              );

              predictability.push(
                data["consolidated_weather"][i]["predictability"]
              );
            }

            this.setState({
              min_temp: min_temp,
              max_temp: max_temp,
              the_temp: the_temp,
              wind_speed: wind_speed,
              humidity: humidity,
              visibility: visibility,
              predictability: predictability,
              air_pressure: air_pressure,
              date: date,
              data: data["consolidated_weather"][0],
              parent: data["parent"],
              title: data['title'],
              sun_rise: data['sun_rise'],
              sun_set: data['sun_set']
            });
          }
        });
    }

  }


  render() {
    if (this.state.data.weather_state_name === "Snow") {
      this.backgroundPhoto = snow
    }
    if (this.state.data.weather_state_name === "Sleet") {
      this.backgroundPhoto = sleet
    }
    if (this.state.data.weather_state_name === "Hail") {
      this.backgroundPhoto = hail
    }
    if (this.state.data.weather_state_name === "Thunderstorm") {
      this.backgroundPhoto = thunderstorm
    }
    if (this.state.data.weather_state_name === "Heavy Rain") {
      this.backgroundPhoto = heavyrain
    }
    if (this.state.data.weather_state_name === "Light Rain") {
      this.backgroundPhoto = lightrain
    }
    if (this.state.data.weather_state_name === "Showers") {
      this.backgroundPhoto = showers
    }
    if (this.state.data.weather_state_name === "Heavy Cloud") {
      this.backgroundPhoto = heavycloud
    }
    if (this.state.data.weather_state_name === "Light Cloud") {
      this.backgroundPhoto = lightcould
    }
    if (this.state.data.weather_state_name === "Clear") {
      this.backgroundPhoto = clear
    }

    // switch (this.state.data.weather_state_name) {
    //   case "Snow":
    //     this.backgroundPhoto = snow
    //   case "Sleet":
    //     this.backgroundPhoto = sleet
    //   case "Hail":
    //     this.backgroundPhoto = hail
    //   case "Thunderstorm":
    //     this.backgroundPhoto = thunderstorm
    //   case "Heavy Rain":
    //     this.backgroundPhoto = heavyrain
    //   case "Light Rain":
    //     this.backgroundPhoto = lightrain
    //   case "Showers":
    //     this.backgroundPhoto = showers
    //   case "Heavy Cloud":
    //     this.backgroundPhoto = heavycloud
    //   case "Light Cloud":
    //     this.backgroundPhoto = lightcould
    //   case "Clear":
    //     this.backgroundPhoto = clear
    //   default:
    //     this.backgroundPhoto = clear
    // }


    const handelInput = (e) => {
      this.setState({ cityName: e.target.value });
      // console.log(e.target.value);
    };
    const getWoeid = () => {
      fetch(
        "https://www.metaweather.com/api/location/search/?query=" +
        this.state.cityName
      )
        .then((response) => response.json())
        .then((data) => this.setState({ wo: data[0]["woeid"] }));
    };
    // console.log(this.state.data);

    if (this.state.isLoading) {
      return <>loading .........</>;
    }
    return (
      <div style={{
        backgroundImage: `url(${this.backgroundPhoto})`, backgroundRepeat: "no-repeat",
        backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed"
      }}>
        <input onChange={handelInput} type="text"></input>
        <input onClick={getWoeid} type="submit"></input>
        <Today state={this.state} />
        <Info state={this.state} />
        <TemChart
          date={this.state.date}
          min_temp={this.state.min_temp}
          max_temp={this.state.max_temp}
          the_temp={this.state.the_temp}
        />
        <WindSpeed date={this.state.date} wind_speed={this.state.wind_speed} />
        <LineChart
          date={this.state.date}
          air_pressure={this.state.air_pressure}
          visibility={this.state.visibility}
          predictability={this.state.predictability}
        />
        <Humidity date={this.state.date} humidity={this.state.humidity} />
      </div>
    );
  }
}
