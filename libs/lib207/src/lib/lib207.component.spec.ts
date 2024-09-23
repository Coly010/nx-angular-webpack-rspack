import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib207Component } from './lib207.component';

describe('Lib207Component', () => {
  let component: Lib207Component;
  let fixture: ComponentFixture<Lib207Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib207Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
