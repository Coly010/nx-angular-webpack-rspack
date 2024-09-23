import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib225Component } from './lib225.component';

describe('Lib225Component', () => {
  let component: Lib225Component;
  let fixture: ComponentFixture<Lib225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib225Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
