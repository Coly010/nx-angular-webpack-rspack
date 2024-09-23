import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib764Component } from './lib764.component';

describe('Lib764Component', () => {
  let component: Lib764Component;
  let fixture: ComponentFixture<Lib764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib764Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
