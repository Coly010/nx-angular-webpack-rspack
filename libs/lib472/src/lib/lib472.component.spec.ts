import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib472Component } from './lib472.component';

describe('Lib472Component', () => {
  let component: Lib472Component;
  let fixture: ComponentFixture<Lib472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib472Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
