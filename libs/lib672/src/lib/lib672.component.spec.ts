import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib672Component } from './lib672.component';

describe('Lib672Component', () => {
  let component: Lib672Component;
  let fixture: ComponentFixture<Lib672Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib672Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
