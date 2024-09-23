import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib350Component } from './lib350.component';

describe('Lib350Component', () => {
  let component: Lib350Component;
  let fixture: ComponentFixture<Lib350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib350Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
