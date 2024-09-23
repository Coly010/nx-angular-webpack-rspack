import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib153Component } from './lib153.component';

describe('Lib153Component', () => {
  let component: Lib153Component;
  let fixture: ComponentFixture<Lib153Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib153Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
