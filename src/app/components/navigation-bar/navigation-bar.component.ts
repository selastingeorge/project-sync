import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../services/auth/auth-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation/navigation-service.service';

@Component({
	selector: 'app-navigation-bar',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './navigation-bar.component.html',
	styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {

	public user: any;

	constructor(private auth: AngularFireAuth, private router:Router, public navigationService:NavigationService) {
		auth.authState.subscribe(user => {
			this.user = user;
		});
	}

	logout():void
	{
		this.auth.signOut().then(()=>{
			this.router.navigate(['signin'])
		});
	}
}
