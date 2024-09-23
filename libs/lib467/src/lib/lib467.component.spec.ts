import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib467Component } from './lib467.component';

describe('Lib467Component', () => {
  let component: Lib467Component;
  let fixture: ComponentFixture<Lib467Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib467Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
