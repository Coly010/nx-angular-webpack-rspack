import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib299Component } from './lib299.component';

describe('Lib299Component', () => {
  let component: Lib299Component;
  let fixture: ComponentFixture<Lib299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib299Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
