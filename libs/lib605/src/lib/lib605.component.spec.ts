import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib605Component } from './lib605.component';

describe('Lib605Component', () => {
  let component: Lib605Component;
  let fixture: ComponentFixture<Lib605Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib605Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
