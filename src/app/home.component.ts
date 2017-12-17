import { Component, Input } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-home',
    template: `
    <div>
        <h1>Home *{{data}}*</h1>
        <button (click)="sendMessage()">Send Message</button>
        <button (click)="clearMessage()">Clear Message</button>
        <button (click)="toggleChild()">Toggle Child</button>
    </div>
    <app-home *ngIf="hasChild()" [data]="'a0'"></app-home>`
})

export class HomeComponent {
    private _data: string;
    private _hasChild = false;
    @Input('data')
    set data(data: string){
        this._data = data;
    }

    get data(): string {
      return this._data;
    }

    constructor(private messageService: MessageService) {
    }

    hasChild(): boolean {
        return this._hasChild;
    }

    toggleChild() {
        this._hasChild = !this._hasChild;
    }

    sendMessage(): void {
        console.log(this._data);
        this.messageService.sendMessage('Message from Home Component to App Component!' + this._data);
    }

    clearMessage(): void {
        this.messageService.clearMessage();
    }
}
