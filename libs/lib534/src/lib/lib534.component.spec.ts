import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib534Component } from './lib534.component';

describe('Lib534Component', () => {
  let component: Lib534Component;
  let fixture: ComponentFixture<Lib534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib534Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
