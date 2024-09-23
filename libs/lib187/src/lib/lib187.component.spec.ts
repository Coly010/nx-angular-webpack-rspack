import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib187Component } from './lib187.component';

describe('Lib187Component', () => {
  let component: Lib187Component;
  let fixture: ComponentFixture<Lib187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib187Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
