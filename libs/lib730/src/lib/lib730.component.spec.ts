import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib730Component } from './lib730.component';

describe('Lib730Component', () => {
  let component: Lib730Component;
  let fixture: ComponentFixture<Lib730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib730Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
