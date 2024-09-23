import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib163Component } from './lib163.component';

describe('Lib163Component', () => {
  let component: Lib163Component;
  let fixture: ComponentFixture<Lib163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib163Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
