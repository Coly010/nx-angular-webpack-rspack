import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib462Component } from './lib462.component';

describe('Lib462Component', () => {
  let component: Lib462Component;
  let fixture: ComponentFixture<Lib462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib462Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
