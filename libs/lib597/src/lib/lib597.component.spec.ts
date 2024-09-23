import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib597Component } from './lib597.component';

describe('Lib597Component', () => {
  let component: Lib597Component;
  let fixture: ComponentFixture<Lib597Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib597Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
