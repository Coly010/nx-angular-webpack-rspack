import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib303Component } from './lib303.component';

describe('Lib303Component', () => {
  let component: Lib303Component;
  let fixture: ComponentFixture<Lib303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib303Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
