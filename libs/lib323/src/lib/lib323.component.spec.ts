import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib323Component } from './lib323.component';

describe('Lib323Component', () => {
  let component: Lib323Component;
  let fixture: ComponentFixture<Lib323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib323Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
