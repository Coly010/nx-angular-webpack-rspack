import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib151Component } from './lib151.component';

describe('Lib151Component', () => {
  let component: Lib151Component;
  let fixture: ComponentFixture<Lib151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib151Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
