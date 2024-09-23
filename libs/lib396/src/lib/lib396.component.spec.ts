import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib396Component } from './lib396.component';

describe('Lib396Component', () => {
  let component: Lib396Component;
  let fixture: ComponentFixture<Lib396Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib396Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
