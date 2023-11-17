import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation/navigation-service.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.scss'
})
export class NavigationLinkComponent {
  @Input() path: string = "/";
  @Input() icon: string = "interests";
  @Input() active: boolean = false;

  constructor(public navigationService: NavigationService, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url == this.path) {
          this.active = true;
          if(window.innerWidth<=992)
          {
            this.navigationService.closeDrawer();
          }
        }
        else
        {
          this.active = false;
        }
      }
    });
  }
}
