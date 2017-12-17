import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from './message.service';
import { FolderTreeService } from './folder-tree/folder-tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService, FolderTreeService]
})
export class AppComponent implements OnDestroy {
  title = 'app';
  message: any;
  subscription: Subscription;
  a1 = 'a1';
  a2 = 'a2';

  data = {
    name: 'tasks',
    children:[
      {
        name: 'sub task1',
        children: [
          {
            name: 'tasks'
          }
        ]
      },
      {
        name: 'sub task2',
        children: [
          {
            name: 'tasks'
          }
        ]
      }
    ]
  };

  select(event) {
    console.log(event);
  }

  constructor(private messageService: MessageService) {
      this.subscription = this.messageService
      .getMessage().subscribe( message => {
          this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
