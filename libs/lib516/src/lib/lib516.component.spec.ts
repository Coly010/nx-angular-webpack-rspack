import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib516Component } from './lib516.component';

describe('Lib516Component', () => {
  let component: Lib516Component;
  let fixture: ComponentFixture<Lib516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib516Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
