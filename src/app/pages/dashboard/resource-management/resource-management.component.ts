import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotImplementedComponent } from '../../../components/not-implemented/not-implemented.component';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';

@Component({
  selector: 'app-resource-management',
  standalone: true,
  imports: [CommonModule,NotImplementedComponent,PageHeaderComponent],
  templateUrl: './resource-management.component.html',
  styleUrl: './resource-management.component.scss'
})
export class ResourceManagementComponent {

}
