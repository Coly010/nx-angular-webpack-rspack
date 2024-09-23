import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib466Component } from './lib466.component';

describe('Lib466Component', () => {
  let component: Lib466Component;
  let fixture: ComponentFixture<Lib466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib466Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
