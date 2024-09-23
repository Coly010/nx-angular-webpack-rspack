import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib607Component } from './lib607.component';

describe('Lib607Component', () => {
  let component: Lib607Component;
  let fixture: ComponentFixture<Lib607Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib607Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib607Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
