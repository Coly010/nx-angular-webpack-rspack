import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib400Component } from './lib400.component';

describe('Lib400Component', () => {
  let component: Lib400Component;
  let fixture: ComponentFixture<Lib400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib400Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
