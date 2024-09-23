import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib256Component } from './lib256.component';

describe('Lib256Component', () => {
  let component: Lib256Component;
  let fixture: ComponentFixture<Lib256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib256Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
