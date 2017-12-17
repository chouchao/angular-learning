import { Component, OnInit, OnDestroy, Inject, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FolderTreeService } from './folder-tree.service';

export interface ITreeNode {
  name: string;
  path: string;
  children: ITreeNode[];
}

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.css']
})
export class FolderTreeComponent implements OnInit, OnDestroy {

  private _data: any;
  private _parent: any;
  private _selected: string;

  @Output()
  public nodeSelected: EventEmitter<any> = new EventEmitter();

  @Input('data')
  set data(data: ITreeNode) {
    this._data = data;
  }
  get data(): ITreeNode {
    return this._data;
  }

  private subscriptions: Subscription[] = [];

  constructor(private folderTreeService: FolderTreeService) {
    this._parent = parent;
  }

  clickName(): void {
    this.folderTreeService.selectNode(this._data.path);
  }

  hasChildren(): boolean {
    return this._data && this._data.children;
  }

  ngOnInit(): void {
    this.subscriptions.push(this.folderTreeService.nodeSelected$.subscribe((e: string) => {
      console.log('name:' + this._data.name + ', subscribe:' + e);
      this.nodeSelected.emit(e);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub && sub.unsubscribe());
  }
}
