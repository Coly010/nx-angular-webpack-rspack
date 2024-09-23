import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Component } from './lib57.component';

describe('Lib57Component', () => {
  let component: Lib57Component;
  let fixture: ComponentFixture<Lib57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib57Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
