import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib468Component } from './lib468.component';

describe('Lib468Component', () => {
  let component: Lib468Component;
  let fixture: ComponentFixture<Lib468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib468Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
