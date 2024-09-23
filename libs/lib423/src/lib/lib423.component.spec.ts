import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib423Component } from './lib423.component';

describe('Lib423Component', () => {
  let component: Lib423Component;
  let fixture: ComponentFixture<Lib423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib423Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
