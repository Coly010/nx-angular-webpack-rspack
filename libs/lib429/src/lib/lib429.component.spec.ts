import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib429Component } from './lib429.component';

describe('Lib429Component', () => {
  let component: Lib429Component;
  let fixture: ComponentFixture<Lib429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib429Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
