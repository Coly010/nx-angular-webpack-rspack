import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib783Component } from './lib783.component';

describe('Lib783Component', () => {
  let component: Lib783Component;
  let fixture: ComponentFixture<Lib783Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib783Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
