import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib407Component } from './lib407.component';

describe('Lib407Component', () => {
  let component: Lib407Component;
  let fixture: ComponentFixture<Lib407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib407Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
