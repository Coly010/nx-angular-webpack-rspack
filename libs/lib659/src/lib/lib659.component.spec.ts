import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib659Component } from './lib659.component';

describe('Lib659Component', () => {
  let component: Lib659Component;
  let fixture: ComponentFixture<Lib659Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib659Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib659Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
