import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib387Component } from './lib387.component';

describe('Lib387Component', () => {
  let component: Lib387Component;
  let fixture: ComponentFixture<Lib387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib387Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
