import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib708Component } from './lib708.component';

describe('Lib708Component', () => {
  let component: Lib708Component;
  let fixture: ComponentFixture<Lib708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib708Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
