import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib731Component } from './lib731.component';

describe('Lib731Component', () => {
  let component: Lib731Component;
  let fixture: ComponentFixture<Lib731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib731Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
