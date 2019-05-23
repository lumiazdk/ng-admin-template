import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsjsComponent } from './rsjs.component';

describe('RsjsComponent', () => {
  let component: RsjsComponent;
  let fixture: ComponentFixture<RsjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
