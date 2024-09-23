import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib220Component } from './lib220.component';

describe('Lib220Component', () => {
  let component: Lib220Component;
  let fixture: ComponentFixture<Lib220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib220Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
