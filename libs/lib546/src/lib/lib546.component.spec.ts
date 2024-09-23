import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib546Component } from './lib546.component';

describe('Lib546Component', () => {
  let component: Lib546Component;
  let fixture: ComponentFixture<Lib546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib546Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
