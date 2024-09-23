import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib799Component } from './lib799.component';

describe('Lib799Component', () => {
  let component: Lib799Component;
  let fixture: ComponentFixture<Lib799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib799Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
