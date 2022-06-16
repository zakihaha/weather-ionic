import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	url = 'https://api.openweathermap.org/data/2.5/'
	key = 'd5df15165a2082af2e543be4d669d349'
	city = 'Klaten'

	constructor(private http: HttpClient) { }

	getDataNow() {
		return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
	}

	getDataForecast() {
		return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
	}
}
