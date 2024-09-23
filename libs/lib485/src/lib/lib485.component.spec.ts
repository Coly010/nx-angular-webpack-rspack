import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib485Component } from './lib485.component';

describe('Lib485Component', () => {
  let component: Lib485Component;
  let fixture: ComponentFixture<Lib485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib485Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
