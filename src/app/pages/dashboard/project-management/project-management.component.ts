import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../components/page-header/page-header.component';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';
import { Projects } from '../../../data/projects.data';
import { NewProjectDialogComponent } from '../../../components/new-project-dialog/new-project-dialog.component';


@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent,ProjectCardComponent,NewProjectDialogComponent],
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.scss',
})
export class ProjectManagementComponent {
  public projects:any;
  public openNewProjectWindow:boolean = false;

  ngOnInit()
  {
    this.projects = new Projects().data;
  }

  toggleProjectWindow()
  {
    if(this.openNewProjectWindow)
    {
      document.body.classList.remove('fixed');
      this.openNewProjectWindow = false;
    }
    else
    {
      document.body.classList.add('fixed');
      this.openNewProjectWindow = true;
    }
  }

  closeRequested(close:boolean)
  {
    console.log("dd")
    this.openNewProjectWindow = false;
    document.body.classList.remove('fixed');
  }
}
