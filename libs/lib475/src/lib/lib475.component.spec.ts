import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib475Component } from './lib475.component';

describe('Lib475Component', () => {
  let component: Lib475Component;
  let fixture: ComponentFixture<Lib475Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib475Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
