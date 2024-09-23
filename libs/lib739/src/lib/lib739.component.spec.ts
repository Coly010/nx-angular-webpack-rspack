import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib739Component } from './lib739.component';

describe('Lib739Component', () => {
  let component: Lib739Component;
  let fixture: ComponentFixture<Lib739Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib739Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
