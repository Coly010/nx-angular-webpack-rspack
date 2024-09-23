import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib289Component } from './lib289.component';

describe('Lib289Component', () => {
  let component: Lib289Component;
  let fixture: ComponentFixture<Lib289Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib289Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
