import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ITreeNode } from './folder-tree.component';

@Injectable()
export class FolderTreeService {

  private _count = 0;

  public nodeSelected$: Subject<string> = new Subject<string>();
  constructor() { }

  public selectNode(path: string) {
    this.nodeSelected$.next(path);
    this._count++;
    console.log(`service invoke count:${this._count}`);
  }
}
