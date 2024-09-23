import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib499Component } from './lib499.component';

describe('Lib499Component', () => {
  let component: Lib499Component;
  let fixture: ComponentFixture<Lib499Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib499Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
