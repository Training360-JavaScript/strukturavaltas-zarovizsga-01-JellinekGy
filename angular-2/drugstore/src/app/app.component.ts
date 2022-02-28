import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';
  myDrug!: Drug;
  listObservable!: Observable<any>;

  constructor(
    private dService: DrugService,
  ) {
    this.listObservable = dService.getAll();
  }

  setDrug(drug: Drug): void {
    this.myDrug = drug;
  }
}
