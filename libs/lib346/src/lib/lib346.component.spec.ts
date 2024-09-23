import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib346Component } from './lib346.component';

describe('Lib346Component', () => {
  let component: Lib346Component;
  let fixture: ComponentFixture<Lib346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib346Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
