import { Component } from '@angular/core';
import { Model, ModelItem } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model = new Model();

  getUser():string {
    return this.model.user;
  }

  getItems():ModelItem[] {
    return this.model.items;
  }
}

