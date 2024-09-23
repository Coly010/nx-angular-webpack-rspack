import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib228Component } from './lib228.component';

describe('Lib228Component', () => {
  let component: Lib228Component;
  let fixture: ComponentFixture<Lib228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib228Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
