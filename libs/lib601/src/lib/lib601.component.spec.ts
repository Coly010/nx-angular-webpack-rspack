import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib601Component } from './lib601.component';

describe('Lib601Component', () => {
  let component: Lib601Component;
  let fixture: ComponentFixture<Lib601Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib601Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
