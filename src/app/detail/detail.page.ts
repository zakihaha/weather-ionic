import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	weather: any;

	constructor(private route: ActivatedRoute, private router: Router) {
		this.route.queryParams.subscribe(params => {
			if (params && params.special) {
				this.weather = JSON.parse(params.special);
				console.log(this.weather)
			}
		})
	}

	ngOnInit() {
	}

	save() {
		// Parse any JSON previously stored in allEntries
		var existingEntries = JSON.parse(localStorage.getItem("fav"));
		
		if(existingEntries == null) existingEntries = [];
		
		localStorage.setItem("fav", JSON.stringify(this.weather));
		// Save allEntries back to local storage
		existingEntries.push(this.weather);
		localStorage.setItem("fav", JSON.stringify(existingEntries));
		
	}

}
