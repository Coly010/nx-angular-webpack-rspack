import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib718Component } from './lib718.component';

describe('Lib718Component', () => {
  let component: Lib718Component;
  let fixture: ComponentFixture<Lib718Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib718Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
