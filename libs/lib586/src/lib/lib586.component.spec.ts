import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib586Component } from './lib586.component';

describe('Lib586Component', () => {
  let component: Lib586Component;
  let fixture: ComponentFixture<Lib586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib586Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
