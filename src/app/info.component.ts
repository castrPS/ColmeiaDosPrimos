import { Component } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})

export class InfoComponent{
	title: '';

	redirectGit(): void{
		window.open("https://github.com/castrPS/ColmeiaDosPrimos");
	}
}