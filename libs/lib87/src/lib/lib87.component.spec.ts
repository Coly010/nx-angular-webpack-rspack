import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Component } from './lib87.component';

describe('Lib87Component', () => {
  let component: Lib87Component;
  let fixture: ComponentFixture<Lib87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib87Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
