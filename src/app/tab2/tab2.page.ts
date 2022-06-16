import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

	public weathers = {}
	public city = ''

	constructor(private weatherService: WeatherService, private route: Router) { }

	ngOnInit(): void {
		this.weatherService.getDataForecast().subscribe(result => {
			var weatherResult: any = result
			this.weathers = weatherResult
			this.city = weatherResult.city.name
		})
	}

	detailpage(data): void {
			let weather = {
				date: data.dt_txt,
				temp: data.main.temp,
				main: data.weather[0].main,
				desc: data.weather[0].description,
				icon: data.weather[0].icon
			}
			let extras: NavigationExtras = {
				queryParams: {
					special: JSON.stringify(weather)
				}
			};
			this.route.navigate(['/detail'], extras);
	}
}
