import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib242Component } from './lib242.component';

describe('Lib242Component', () => {
  let component: Lib242Component;
  let fixture: ComponentFixture<Lib242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib242Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
