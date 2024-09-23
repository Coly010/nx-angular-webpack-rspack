import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib477Component } from './lib477.component';

describe('Lib477Component', () => {
  let component: Lib477Component;
  let fixture: ComponentFixture<Lib477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib477Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
