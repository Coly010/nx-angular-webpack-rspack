import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib796Component } from './lib796.component';

describe('Lib796Component', () => {
  let component: Lib796Component;
  let fixture: ComponentFixture<Lib796Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib796Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
