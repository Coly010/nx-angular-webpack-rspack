import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib369Component } from './lib369.component';

describe('Lib369Component', () => {
  let component: Lib369Component;
  let fixture: ComponentFixture<Lib369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib369Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
