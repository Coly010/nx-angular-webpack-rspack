import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib767Component } from './lib767.component';

describe('Lib767Component', () => {
  let component: Lib767Component;
  let fixture: ComponentFixture<Lib767Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib767Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
