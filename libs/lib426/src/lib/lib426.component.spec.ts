import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib426Component } from './lib426.component';

describe('Lib426Component', () => {
  let component: Lib426Component;
  let fixture: ComponentFixture<Lib426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib426Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
