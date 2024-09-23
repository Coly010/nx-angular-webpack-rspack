import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib190Component } from './lib190.component';

describe('Lib190Component', () => {
  let component: Lib190Component;
  let fixture: ComponentFixture<Lib190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib190Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
