import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib315Component } from './lib315.component';

describe('Lib315Component', () => {
  let component: Lib315Component;
  let fixture: ComponentFixture<Lib315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib315Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
