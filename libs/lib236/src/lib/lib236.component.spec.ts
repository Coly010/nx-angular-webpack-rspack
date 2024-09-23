import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib236Component } from './lib236.component';

describe('Lib236Component', () => {
  let component: Lib236Component;
  let fixture: ComponentFixture<Lib236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib236Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
