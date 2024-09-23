import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib679Component } from './lib679.component';

describe('Lib679Component', () => {
  let component: Lib679Component;
  let fixture: ComponentFixture<Lib679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib679Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
