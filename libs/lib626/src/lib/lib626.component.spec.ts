import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib626Component } from './lib626.component';

describe('Lib626Component', () => {
  let component: Lib626Component;
  let fixture: ComponentFixture<Lib626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib626Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
