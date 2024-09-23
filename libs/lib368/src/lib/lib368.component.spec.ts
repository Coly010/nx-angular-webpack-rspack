import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib368Component } from './lib368.component';

describe('Lib368Component', () => {
  let component: Lib368Component;
  let fixture: ComponentFixture<Lib368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib368Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
