import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib161Component } from './lib161.component';

describe('Lib161Component', () => {
  let component: Lib161Component;
  let fixture: ComponentFixture<Lib161Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib161Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
