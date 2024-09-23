import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Component } from './lib86.component';

describe('Lib86Component', () => {
  let component: Lib86Component;
  let fixture: ComponentFixture<Lib86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib86Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
