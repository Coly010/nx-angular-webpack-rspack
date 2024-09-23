import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib568Component } from './lib568.component';

describe('Lib568Component', () => {
  let component: Lib568Component;
  let fixture: ComponentFixture<Lib568Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib568Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
