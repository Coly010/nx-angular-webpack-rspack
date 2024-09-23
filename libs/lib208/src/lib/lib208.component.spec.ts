import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib208Component } from './lib208.component';

describe('Lib208Component', () => {
  let component: Lib208Component;
  let fixture: ComponentFixture<Lib208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib208Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
