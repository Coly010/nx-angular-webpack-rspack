import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib174Component } from './lib174.component';

describe('Lib174Component', () => {
  let component: Lib174Component;
  let fixture: ComponentFixture<Lib174Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib174Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
