import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Component } from './lib11.component';

describe('Lib11Component', () => {
  let component: Lib11Component;
  let fixture: ComponentFixture<Lib11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
