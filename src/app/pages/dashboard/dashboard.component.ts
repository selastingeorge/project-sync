import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { NavigationLinkComponent } from '../../components/navigation-link/navigation-link.component';
import { NavigationService } from '../../services/navigation/navigation-service.service';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [
		CommonModule,
		DashboardLayoutComponent,
		ToolbarComponent,
		NavigationBarComponent,
		NavigationLinkComponent,
		RouterModule
	],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
	public loading: boolean = false;

	constructor(public navigationService: NavigationService, private router: Router) {

		router.events.forEach((event) => {
			if (event instanceof NavigationStart) {
				this.loading = true
			}
			else if (event instanceof NavigationEnd) {
				this.loading = false;
			}
		});
	}

	ngOnInit() {
	}

	onDrawerOpen(isOpen: boolean): void {
		if(isOpen)
		{
			this.navigationService.openDrawer()
		}
		else
		{
			this.navigationService.closeDrawer()
		}
	}
}
