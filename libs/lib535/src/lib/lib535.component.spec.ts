import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib535Component } from './lib535.component';

describe('Lib535Component', () => {
  let component: Lib535Component;
  let fixture: ComponentFixture<Lib535Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib535Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
