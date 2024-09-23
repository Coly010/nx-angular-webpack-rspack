import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib443Component } from './lib443.component';

describe('Lib443Component', () => {
  let component: Lib443Component;
  let fixture: ComponentFixture<Lib443Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib443Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib443Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
