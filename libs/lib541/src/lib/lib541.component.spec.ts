import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib541Component } from './lib541.component';

describe('Lib541Component', () => {
  let component: Lib541Component;
  let fixture: ComponentFixture<Lib541Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib541Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
