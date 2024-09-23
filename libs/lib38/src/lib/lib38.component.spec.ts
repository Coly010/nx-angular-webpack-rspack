import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Component } from './lib38.component';

describe('Lib38Component', () => {
  let component: Lib38Component;
  let fixture: ComponentFixture<Lib38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
