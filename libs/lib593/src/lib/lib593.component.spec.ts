import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib593Component } from './lib593.component';

describe('Lib593Component', () => {
  let component: Lib593Component;
  let fixture: ComponentFixture<Lib593Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib593Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
