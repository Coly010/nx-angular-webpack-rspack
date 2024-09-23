import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib282Component } from './lib282.component';

describe('Lib282Component', () => {
  let component: Lib282Component;
  let fixture: ComponentFixture<Lib282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib282Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
