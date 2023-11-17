import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation/navigation-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [CommonModule,RouterModule],
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

    @Input() isDrawerOpen = false;
    @Output() drawerExpansionRequested = new EventEmitter<boolean>();

    public user: any;
    public menuOpen:boolean = false;

    constructor(private auth: AngularFireAuth,private navigationService:NavigationService, private router:Router) {
		auth.authState.subscribe(user => {
			this.user = user;
		});

        window.addEventListener('click', (e) => {
			let dropdown = document.querySelector('.dropdown-menu-wrap');
			if (dropdown) {
				if (!dropdown?.contains(e.target as Node)) {
					for (var i = 0; i < dropdown.children.length; i++) {
						var child = dropdown.children[i];
						if (child.classList.contains('menu-open')) {
							child.classList.remove('menu-open');
                            this.menuOpen = false;
						}
					}
				}
			}
		});
	}


    toggleDrawer():void
    {
        this.isDrawerOpen = !this.isDrawerOpen;
        (this.isDrawerOpen)?this.navigationService.openDrawer():this.navigationService.closeDrawer();
        this.drawerExpansionRequested.emit(this.isDrawerOpen);
    }

    toggleMenu()
    {
        this.menuOpen = !this.menuOpen;
    }

    logout()
    {
        this.auth.signOut().then(()=>{
            this.router.navigate(['signin']);
        })
    }
}
