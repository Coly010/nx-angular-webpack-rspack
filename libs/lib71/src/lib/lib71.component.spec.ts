import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Component } from './lib71.component';

describe('Lib71Component', () => {
  let component: Lib71Component;
  let fixture: ComponentFixture<Lib71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib71Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
