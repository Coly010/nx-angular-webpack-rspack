import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib258Component } from './lib258.component';

describe('Lib258Component', () => {
  let component: Lib258Component;
  let fixture: ComponentFixture<Lib258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib258Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
