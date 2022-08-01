import {Component, OnInit, Pipe} from '@angular/core';

@Component({
  selector: 'app-ngrx-training',
  templateUrl: './ngrx-training.component.html',
  styleUrls: ['./ngrx-training.component.css']
})
export class NgrxTrainingComponent implements OnInit {

 date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

  increase() {

  }

  decrease() {

  }

  clear() {

  }
}
