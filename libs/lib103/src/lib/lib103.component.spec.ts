import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib103Component } from './lib103.component';

describe('Lib103Component', () => {
  let component: Lib103Component;
  let fixture: ComponentFixture<Lib103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib103Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
