import React from 'react';
import { connect } from 'react-redux';
import Charts from '../components/Charts'
class WeatherList extends React.Component{

	renderWeather(cityData){
		const name = cityData.city.name
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return(
				<tr key={name}>
					<td >
						{name}
					</td>
					<td>
					<Charts 
					data={temps}
					color={"#571844"}/>
					</td>
					<td>
					<Charts 
					data={pressure}
					color={"#c70039"}/>
					</td>
					<td>
					<Charts 
					data={humidity}
					color={"#fec300"}/>
					</td>
				</tr>
			)
	}
	render(){
		return(
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Ville</th>
							<th>Temperature</th>
							<th>Pression</th>
							<th>Humidité</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			)
	}
}

function mapStatetoProps({weather}) {
	return { weather}
}

//Au lieu de function mapStateToProps(state){
//	return {weather : state.weather}
//}

export default connect(mapStatetoProps)(WeatherList)