import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib424Component } from './lib424.component';

describe('Lib424Component', () => {
  let component: Lib424Component;
  let fixture: ComponentFixture<Lib424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib424Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
