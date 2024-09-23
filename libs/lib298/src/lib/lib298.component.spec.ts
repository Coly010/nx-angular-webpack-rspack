import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib298Component } from './lib298.component';

describe('Lib298Component', () => {
  let component: Lib298Component;
  let fixture: ComponentFixture<Lib298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib298Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
