import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib645Component } from './lib645.component';

describe('Lib645Component', () => {
  let component: Lib645Component;
  let fixture: ComponentFixture<Lib645Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib645Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
