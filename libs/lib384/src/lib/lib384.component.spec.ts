import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib384Component } from './lib384.component';

describe('Lib384Component', () => {
  let component: Lib384Component;
  let fixture: ComponentFixture<Lib384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib384Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
