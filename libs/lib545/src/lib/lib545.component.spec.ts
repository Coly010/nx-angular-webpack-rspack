import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib545Component } from './lib545.component';

describe('Lib545Component', () => {
  let component: Lib545Component;
  let fixture: ComponentFixture<Lib545Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib545Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
