import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OllieComponent } from './ollie.component';

describe('OllieComponent', () => {
  let component: OllieComponent;
  let fixture: ComponentFixture<OllieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OllieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OllieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
