import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib202Component } from './lib202.component';

describe('Lib202Component', () => {
  let component: Lib202Component;
  let fixture: ComponentFixture<Lib202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib202Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
