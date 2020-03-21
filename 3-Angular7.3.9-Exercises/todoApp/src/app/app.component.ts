import { Component } from '@angular/core';
import { Model, ModelItem } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  /*ngAfterViewInit() {
    setTimeout(() => {
      let myItems:ModelItem[] = this.getItems();
      console.log(myItems[0]);
      myItems[0].action=false;
      console.log(myItems[0]);
    });
  }*/

  model = new Model();

  getUser():string {
    return this.model.user;
  }

  getItems():ModelItem[] {
    return this.model.items.filter(item => !item.action);
  }

  addModelItem(value: string) {
    if(value!="") {
      this.model.items.push(new ModelItem(value,false));
    } else {
      alert("Item can not be null");
    }
  }
}

