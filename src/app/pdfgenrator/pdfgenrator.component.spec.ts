import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfgenratorComponent } from './pdfgenrator.component';

describe('PdfgenratorComponent', () => {
  let component: PdfgenratorComponent;
  let fixture: ComponentFixture<PdfgenratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfgenratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfgenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
