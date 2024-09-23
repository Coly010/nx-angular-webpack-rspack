import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib306Component } from './lib306.component';

describe('Lib306Component', () => {
  let component: Lib306Component;
  let fixture: ComponentFixture<Lib306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib306Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
