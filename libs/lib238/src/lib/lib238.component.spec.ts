import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib238Component } from './lib238.component';

describe('Lib238Component', () => {
  let component: Lib238Component;
  let fixture: ComponentFixture<Lib238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib238Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
