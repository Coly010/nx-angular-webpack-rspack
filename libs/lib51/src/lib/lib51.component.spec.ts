import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Component } from './lib51.component';

describe('Lib51Component', () => {
  let component: Lib51Component;
  let fixture: ComponentFixture<Lib51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib51Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
