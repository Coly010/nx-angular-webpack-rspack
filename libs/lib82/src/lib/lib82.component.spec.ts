import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Component } from './lib82.component';

describe('Lib82Component', () => {
  let component: Lib82Component;
  let fixture: ComponentFixture<Lib82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib82Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
