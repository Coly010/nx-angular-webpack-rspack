import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib487Component } from './lib487.component';

describe('Lib487Component', () => {
  let component: Lib487Component;
  let fixture: ComponentFixture<Lib487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib487Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
