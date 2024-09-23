import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib572Component } from './lib572.component';

describe('Lib572Component', () => {
  let component: Lib572Component;
  let fixture: ComponentFixture<Lib572Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib572Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
