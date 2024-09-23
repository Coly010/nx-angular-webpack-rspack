import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib674Component } from './lib674.component';

describe('Lib674Component', () => {
  let component: Lib674Component;
  let fixture: ComponentFixture<Lib674Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib674Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
