import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib143Component } from './lib143.component';

describe('Lib143Component', () => {
  let component: Lib143Component;
  let fixture: ComponentFixture<Lib143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib143Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
