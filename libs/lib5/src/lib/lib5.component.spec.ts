import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Component } from './lib5.component';

describe('Lib5Component', () => {
  let component: Lib5Component;
  let fixture: ComponentFixture<Lib5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
