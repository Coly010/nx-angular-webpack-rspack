import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib320Component } from './lib320.component';

describe('Lib320Component', () => {
  let component: Lib320Component;
  let fixture: ComponentFixture<Lib320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib320Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
