import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib474Component } from './lib474.component';

describe('Lib474Component', () => {
  let component: Lib474Component;
  let fixture: ComponentFixture<Lib474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib474Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
