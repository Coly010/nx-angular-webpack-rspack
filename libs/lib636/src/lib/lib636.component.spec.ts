import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib636Component } from './lib636.component';

describe('Lib636Component', () => {
  let component: Lib636Component;
  let fixture: ComponentFixture<Lib636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib636Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
