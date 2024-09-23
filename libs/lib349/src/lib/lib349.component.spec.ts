import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib349Component } from './lib349.component';

describe('Lib349Component', () => {
  let component: Lib349Component;
  let fixture: ComponentFixture<Lib349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib349Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
