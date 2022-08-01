import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';


interface User {
  id?: number,
  name?: string,
  template?: string
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})


export class FooComponent implements OnInit{
  condition = true;
  deepObject?: any;
  users: User[] = [{
    id: 1,
    name: 'Sam',
    template: 'bold'
  },
    {
      id: 2,
      name: 'Mike',
      template: 'italic'
    },
    {
      id: 23,
      name: 'Maurice',
      template: 'default'
    },
  ]

  @Input() template?: TemplateRef<{$implicit: number}>;
  @Input()  title!: string;
  @Output() sayHi = new EventEmitter<string>();

  constructor() {
    console.log('constructor:', this.title);

  }
  ngOnInit() {
    console.log('ngOnInit:', this.title);
  }

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surname: 'Doe',
      }
    }
  }

  onSayHiFromFoo(){
    this.sayHi.emit(this.title + ", Privet from FOO")
  }


}
