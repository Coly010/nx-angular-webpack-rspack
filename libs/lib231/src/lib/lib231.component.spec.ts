import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib231Component } from './lib231.component';

describe('Lib231Component', () => {
  let component: Lib231Component;
  let fixture: ComponentFixture<Lib231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib231Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
