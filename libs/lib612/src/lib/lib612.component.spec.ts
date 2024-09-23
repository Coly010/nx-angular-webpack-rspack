import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib612Component } from './lib612.component';

describe('Lib612Component', () => {
  let component: Lib612Component;
  let fixture: ComponentFixture<Lib612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib612Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
