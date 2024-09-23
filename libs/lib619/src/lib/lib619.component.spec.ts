import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib619Component } from './lib619.component';

describe('Lib619Component', () => {
  let component: Lib619Component;
  let fixture: ComponentFixture<Lib619Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib619Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
