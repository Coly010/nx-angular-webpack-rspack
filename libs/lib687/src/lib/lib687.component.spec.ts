import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib687Component } from './lib687.component';

describe('Lib687Component', () => {
  let component: Lib687Component;
  let fixture: ComponentFixture<Lib687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib687Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
