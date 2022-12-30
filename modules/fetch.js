
export function weatherAPI(){
fetch('https://api.weatherapi.com/v1/forecast.json?key=e5e5e62cb4c74836a5a222404221812&q=Vaxjo&days=10&aqi=no&alerts=no')
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			document.getElementById("weatherDay").innerHTML =
				response.location.localtime;
			document.getElementById("weatherImg").src =
				response.current.condition.icon;
			document.getElementById("weatherTemp").innerHTML =
				"Just nu : " + response.current.temp_c + "°C";

			document.getElementById("weatherDay1").innerHTML =
				response.forecast.forecastday[1].date;
			document.getElementById("weatherImg1").src =
				response.forecast.forecastday[1].day.condition.icon;
			document.getElementById("weatherTemp1").innerHTML =
				"Imorgon : " + response.forecast.forecastday[1].day.avgtemp_c + "°C";

			document.getElementById("weatherDay2").innerHTML =
				response.forecast.forecastday[2].date;
			document.getElementById("weatherImg2").src =
				response.forecast.forecastday[2].day.condition.icon;
			document.getElementById("weatherTemp2").innerHTML =
				response.forecast.forecastday[2].day.avgtemp_c + "°C";
		});

		setInterval(function() {
			fetch('https://api.weatherapi.com/v1/forecast.json?key=e5e5e62cb4c74836a5a222404221812&q=Vaxjo&days=10&aqi=no&alerts=no')
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				document.getElementById("weatherDay").innerHTML =
					response.location.localtime;
				document.getElementById("weatherImg").src =
					response.current.condition.icon;
				document.getElementById("weatherTemp").innerHTML =
					"Just nu : " + response.current.temp_c + "°C";
			});
	}, 60000);
}
