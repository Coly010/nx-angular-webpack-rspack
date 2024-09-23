import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib309Component } from './lib309.component';

describe('Lib309Component', () => {
  let component: Lib309Component;
  let fixture: ComponentFixture<Lib309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib309Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
