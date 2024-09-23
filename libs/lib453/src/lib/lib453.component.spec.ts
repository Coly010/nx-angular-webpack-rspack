import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib453Component } from './lib453.component';

describe('Lib453Component', () => {
  let component: Lib453Component;
  let fixture: ComponentFixture<Lib453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib453Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
