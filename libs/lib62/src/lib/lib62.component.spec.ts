import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Component } from './lib62.component';

describe('Lib62Component', () => {
  let component: Lib62Component;
  let fixture: ComponentFixture<Lib62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib62Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
