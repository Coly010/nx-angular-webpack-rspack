import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib564Component } from './lib564.component';

describe('Lib564Component', () => {
  let component: Lib564Component;
  let fixture: ComponentFixture<Lib564Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib564Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
