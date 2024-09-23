import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib507Component } from './lib507.component';

describe('Lib507Component', () => {
  let component: Lib507Component;
  let fixture: ComponentFixture<Lib507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib507Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
