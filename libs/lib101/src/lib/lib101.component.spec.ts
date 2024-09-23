import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib101Component } from './lib101.component';

describe('Lib101Component', () => {
  let component: Lib101Component;
  let fixture: ComponentFixture<Lib101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib101Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
