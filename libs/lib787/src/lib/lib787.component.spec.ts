import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib787Component } from './lib787.component';

describe('Lib787Component', () => {
  let component: Lib787Component;
  let fixture: ComponentFixture<Lib787Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib787Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
