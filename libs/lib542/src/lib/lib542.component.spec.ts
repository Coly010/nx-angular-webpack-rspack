import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib542Component } from './lib542.component';

describe('Lib542Component', () => {
  let component: Lib542Component;
  let fixture: ComponentFixture<Lib542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib542Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
