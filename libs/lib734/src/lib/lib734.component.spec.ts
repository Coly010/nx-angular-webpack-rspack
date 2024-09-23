import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib734Component } from './lib734.component';

describe('Lib734Component', () => {
  let component: Lib734Component;
  let fixture: ComponentFixture<Lib734Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib734Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
