import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib290Component } from './lib290.component';

describe('Lib290Component', () => {
  let component: Lib290Component;
  let fixture: ComponentFixture<Lib290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib290Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
