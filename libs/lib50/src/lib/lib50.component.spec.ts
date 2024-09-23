import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Component } from './lib50.component';

describe('Lib50Component', () => {
  let component: Lib50Component;
  let fixture: ComponentFixture<Lib50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib50Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
