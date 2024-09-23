import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib658Component } from './lib658.component';

describe('Lib658Component', () => {
  let component: Lib658Component;
  let fixture: ComponentFixture<Lib658Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib658Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
