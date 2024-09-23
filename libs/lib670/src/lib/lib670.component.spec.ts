import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib670Component } from './lib670.component';

describe('Lib670Component', () => {
  let component: Lib670Component;
  let fixture: ComponentFixture<Lib670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib670Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
