import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib756Component } from './lib756.component';

describe('Lib756Component', () => {
  let component: Lib756Component;
  let fixture: ComponentFixture<Lib756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib756Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
