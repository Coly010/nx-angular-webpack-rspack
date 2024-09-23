import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib523Component } from './lib523.component';

describe('Lib523Component', () => {
  let component: Lib523Component;
  let fixture: ComponentFixture<Lib523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib523Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
