import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpObservablesComponent } from './http-observables.component';

describe('HttpObservablesComponent', () => {
  let component: HttpObservablesComponent;
  let fixture: ComponentFixture<HttpObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
