import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib653Component } from './lib653.component';

describe('Lib653Component', () => {
  let component: Lib653Component;
  let fixture: ComponentFixture<Lib653Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib653Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
