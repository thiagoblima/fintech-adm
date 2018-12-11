import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm;
  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  private onSubmit (): Object {
    return this.searchForm.value;
  }

  public get submitInstance(): () => Object {
    return this.onSubmit;
  }


  ngOnInit() {
    this.onSubmit();
  }

}
