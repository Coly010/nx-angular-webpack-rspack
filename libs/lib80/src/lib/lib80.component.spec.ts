import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Component } from './lib80.component';

describe('Lib80Component', () => {
  let component: Lib80Component;
  let fixture: ComponentFixture<Lib80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib80Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
