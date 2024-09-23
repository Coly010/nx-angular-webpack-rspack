import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib198Component } from './lib198.component';

describe('Lib198Component', () => {
  let component: Lib198Component;
  let fixture: ComponentFixture<Lib198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib198Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
