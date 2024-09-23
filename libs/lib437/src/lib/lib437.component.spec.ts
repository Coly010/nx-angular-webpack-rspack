import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib437Component } from './lib437.component';

describe('Lib437Component', () => {
  let component: Lib437Component;
  let fixture: ComponentFixture<Lib437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib437Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
