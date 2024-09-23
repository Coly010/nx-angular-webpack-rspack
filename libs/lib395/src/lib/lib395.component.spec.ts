import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib395Component } from './lib395.component';

describe('Lib395Component', () => {
  let component: Lib395Component;
  let fixture: ComponentFixture<Lib395Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib395Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
