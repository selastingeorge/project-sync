import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent,PageHeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
