import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib624Component } from './lib624.component';

describe('Lib624Component', () => {
  let component: Lib624Component;
  let fixture: ComponentFixture<Lib624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib624Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
