import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib332Component } from './lib332.component';

describe('Lib332Component', () => {
  let component: Lib332Component;
  let fixture: ComponentFixture<Lib332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib332Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
