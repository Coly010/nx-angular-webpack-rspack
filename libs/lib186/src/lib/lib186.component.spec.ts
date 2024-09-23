import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib186Component } from './lib186.component';

describe('Lib186Component', () => {
  let component: Lib186Component;
  let fixture: ComponentFixture<Lib186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib186Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
