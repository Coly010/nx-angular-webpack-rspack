import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Component } from './lib8.component';

describe('Lib8Component', () => {
  let component: Lib8Component;
  let fixture: ComponentFixture<Lib8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
