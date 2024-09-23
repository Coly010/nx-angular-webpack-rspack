import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib188Component } from './lib188.component';

describe('Lib188Component', () => {
  let component: Lib188Component;
  let fixture: ComponentFixture<Lib188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib188Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
