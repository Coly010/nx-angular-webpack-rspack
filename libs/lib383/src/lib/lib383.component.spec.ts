import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib383Component } from './lib383.component';

describe('Lib383Component', () => {
  let component: Lib383Component;
  let fixture: ComponentFixture<Lib383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib383Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
