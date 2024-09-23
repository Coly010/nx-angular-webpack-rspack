import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib575Component } from './lib575.component';

describe('Lib575Component', () => {
  let component: Lib575Component;
  let fixture: ComponentFixture<Lib575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib575Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
