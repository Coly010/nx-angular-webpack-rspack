import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib408Component } from './lib408.component';

describe('Lib408Component', () => {
  let component: Lib408Component;
  let fixture: ComponentFixture<Lib408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib408Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
