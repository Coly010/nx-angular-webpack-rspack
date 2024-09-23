import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib296Component } from './lib296.component';

describe('Lib296Component', () => {
  let component: Lib296Component;
  let fixture: ComponentFixture<Lib296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib296Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
