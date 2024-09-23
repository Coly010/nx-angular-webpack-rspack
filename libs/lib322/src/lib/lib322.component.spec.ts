import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib322Component } from './lib322.component';

describe('Lib322Component', () => {
  let component: Lib322Component;
  let fixture: ComponentFixture<Lib322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib322Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
