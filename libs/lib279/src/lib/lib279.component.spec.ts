import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib279Component } from './lib279.component';

describe('Lib279Component', () => {
  let component: Lib279Component;
  let fixture: ComponentFixture<Lib279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib279Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
