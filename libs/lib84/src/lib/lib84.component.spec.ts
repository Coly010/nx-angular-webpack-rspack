import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Component } from './lib84.component';

describe('Lib84Component', () => {
  let component: Lib84Component;
  let fixture: ComponentFixture<Lib84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib84Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
