import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Component } from './lib64.component';

describe('Lib64Component', () => {
  let component: Lib64Component;
  let fixture: ComponentFixture<Lib64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib64Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
