import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib329Component } from './lib329.component';

describe('Lib329Component', () => {
  let component: Lib329Component;
  let fixture: ComponentFixture<Lib329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib329Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
