import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib176Component } from './lib176.component';

describe('Lib176Component', () => {
  let component: Lib176Component;
  let fixture: ComponentFixture<Lib176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib176Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
