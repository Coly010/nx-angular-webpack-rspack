import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib261Component } from './lib261.component';

describe('Lib261Component', () => {
  let component: Lib261Component;
  let fixture: ComponentFixture<Lib261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib261Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
