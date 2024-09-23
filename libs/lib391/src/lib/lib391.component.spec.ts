import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib391Component } from './lib391.component';

describe('Lib391Component', () => {
  let component: Lib391Component;
  let fixture: ComponentFixture<Lib391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib391Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
