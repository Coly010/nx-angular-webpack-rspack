import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib583Component } from './lib583.component';

describe('Lib583Component', () => {
  let component: Lib583Component;
  let fixture: ComponentFixture<Lib583Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib583Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
