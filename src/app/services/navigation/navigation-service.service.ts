import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public drawerOpen:boolean = true;

  constructor() { }

  openDrawer():void
  {
    this.drawerOpen = true;
  }

  closeDrawer():void
  {
    this.drawerOpen = false;
  }

  isDrawerOpen():boolean
  {
    return this.drawerOpen;
  }
}
