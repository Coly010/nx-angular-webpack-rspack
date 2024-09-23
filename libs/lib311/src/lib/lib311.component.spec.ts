import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib311Component } from './lib311.component';

describe('Lib311Component', () => {
  let component: Lib311Component;
  let fixture: ComponentFixture<Lib311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib311Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
