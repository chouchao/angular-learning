import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, from, Subject, Observable } from 'rxjs';
import { CreateService } from '../services/create.service';

@Component({
  selector: 'app-create-observable',
  templateUrl: './create-observable.component.html',
  styleUrls: ['./create-observable.component.css']
})
export class CreateObservableComponent implements OnInit, OnDestroy {

  source_of$ = of(1, 2, 3);
  source_from$ = from([1, 2, 3]);
  data$: Observable<number>;
  searchTerms = new Subject<string>();

  constructor(public createService: CreateService) { }

  ngOnInit() {
    // this.heroes$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
  }


  ngOnDestroy() {
    // throw new Error("Method not implemented.");
  }
}
