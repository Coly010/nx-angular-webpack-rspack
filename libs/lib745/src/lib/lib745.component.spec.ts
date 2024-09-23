import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib745Component } from './lib745.component';

describe('Lib745Component', () => {
  let component: Lib745Component;
  let fixture: ComponentFixture<Lib745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib745Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
