import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-csat-management',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent,PageHeaderComponent],
  templateUrl: './csat-management.component.html',
  styleUrl: './csat-management.component.scss'
})
export class CsatManagementComponent {

}
