import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib167Component } from './lib167.component';

describe('Lib167Component', () => {
  let component: Lib167Component;
  let fixture: ComponentFixture<Lib167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib167Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
