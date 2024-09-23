import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib130Component } from './lib130.component';

describe('Lib130Component', () => {
  let component: Lib130Component;
  let fixture: ComponentFixture<Lib130Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib130Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
