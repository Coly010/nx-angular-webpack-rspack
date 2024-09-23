import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib126Component } from './lib126.component';

describe('Lib126Component', () => {
  let component: Lib126Component;
  let fixture: ComponentFixture<Lib126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib126Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
