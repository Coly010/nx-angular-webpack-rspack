import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib156Component } from './lib156.component';

describe('Lib156Component', () => {
  let component: Lib156Component;
  let fixture: ComponentFixture<Lib156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib156Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
