import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib648Component } from './lib648.component';

describe('Lib648Component', () => {
  let component: Lib648Component;
  let fixture: ComponentFixture<Lib648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib648Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
