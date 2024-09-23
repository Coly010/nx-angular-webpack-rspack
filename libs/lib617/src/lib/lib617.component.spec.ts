import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib617Component } from './lib617.component';

describe('Lib617Component', () => {
  let component: Lib617Component;
  let fixture: ComponentFixture<Lib617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib617Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
