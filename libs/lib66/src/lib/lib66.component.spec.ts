import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Component } from './lib66.component';

describe('Lib66Component', () => {
  let component: Lib66Component;
  let fixture: ComponentFixture<Lib66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib66Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
