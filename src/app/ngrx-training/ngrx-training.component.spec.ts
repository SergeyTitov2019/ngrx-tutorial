import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTrainingComponent } from './ngrx-training.component';

describe('NgrxTrainingComponent', () => {
  let component: NgrxTrainingComponent;
  let fixture: ComponentFixture<NgrxTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
