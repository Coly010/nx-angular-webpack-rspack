import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib388Component } from './lib388.component';

describe('Lib388Component', () => {
  let component: Lib388Component;
  let fixture: ComponentFixture<Lib388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib388Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
