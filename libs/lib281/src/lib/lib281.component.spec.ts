import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib281Component } from './lib281.component';

describe('Lib281Component', () => {
  let component: Lib281Component;
  let fixture: ComponentFixture<Lib281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib281Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
