import { Component, OnInit } from '@angular/core';
import {Observable, Subject, tap, zip} from "rxjs";


type Durum = [ 'flat bread', 'meat', 'sauce', 'cabbage']

@Component({
  selector: 'app-durum',
  templateUrl: './durum.component.html',
  styleUrls: ['./durum.component.css']
})


export class DurumComponent implements OnInit {
  durum$: Observable<Durum> | undefined

  _flatBread = new Subject<'flat bread'>()
  _meat = new Subject<'meat'>()
  _sauce = new Subject<'sauce'>()
  _tomato = new Subject<'tomato'>()
  _cabbage = new Subject<'cabbage'>()


  ngOnInit(): void {
    // @ts-ignore
    this.durum$ = zip(
      this._flatBread.pipe(tap(console.log)),
      this._meat.pipe(tap(console.log)),
      this._cabbage.pipe(tap(console.log)),
      this._tomato.pipe(tap(console.log)),
      this._sauce.pipe(tap(console.log))
    ).pipe(
      tap((durum) => console.log('Enjoy!', durum))
    )
  }

}
