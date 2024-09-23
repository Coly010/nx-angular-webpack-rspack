import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib627Component } from './lib627.component';

describe('Lib627Component', () => {
  let component: Lib627Component;
  let fixture: ComponentFixture<Lib627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib627Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
