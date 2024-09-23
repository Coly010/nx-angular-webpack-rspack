import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Component } from './lib94.component';

describe('Lib94Component', () => {
  let component: Lib94Component;
  let fixture: ComponentFixture<Lib94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib94Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
