import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib134Component } from './lib134.component';

describe('Lib134Component', () => {
  let component: Lib134Component;
  let fixture: ComponentFixture<Lib134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib134Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
