import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

	public weathers = {}
	public temp = 0
	public city = ''

	constructor(private weatherService: WeatherService) { }

	ngOnInit(): void {
		this.weatherService.getDataNow().subscribe(result => {
			var weatherResult: any = result

			this.weathers = weatherResult
			this.temp = weatherResult.main.temp
			this.city = weatherResult.name

			console.log(weatherResult);

		})
	}

}
