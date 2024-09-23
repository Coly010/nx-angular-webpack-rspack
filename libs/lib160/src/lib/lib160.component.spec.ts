import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib160Component } from './lib160.component';

describe('Lib160Component', () => {
  let component: Lib160Component;
  let fixture: ComponentFixture<Lib160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib160Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
