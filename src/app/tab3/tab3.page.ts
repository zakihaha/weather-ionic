import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	public favs;

	constructor(private platform: Platform,) {
	}

	ngOnInit() {
		this.getFavorite();
	}
	
	ionViewWillEnter() {
		this.getFavorite();
		
	}

	getFavorite() {
		this.favs = JSON.parse(localStorage.getItem('fav'));
		console.log(this.favs);
		
	}
	
}
