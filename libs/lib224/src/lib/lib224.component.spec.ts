import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib224Component } from './lib224.component';

describe('Lib224Component', () => {
  let component: Lib224Component;
  let fixture: ComponentFixture<Lib224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib224Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
