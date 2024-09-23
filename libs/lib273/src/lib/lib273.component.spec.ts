import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib273Component } from './lib273.component';

describe('Lib273Component', () => {
  let component: Lib273Component;
  let fixture: ComponentFixture<Lib273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib273Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
