import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib124Component } from './lib124.component';

describe('Lib124Component', () => {
  let component: Lib124Component;
  let fixture: ComponentFixture<Lib124Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib124Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
