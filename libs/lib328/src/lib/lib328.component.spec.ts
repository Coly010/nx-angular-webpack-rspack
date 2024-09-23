import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib328Component } from './lib328.component';

describe('Lib328Component', () => {
  let component: Lib328Component;
  let fixture: ComponentFixture<Lib328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib328Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
