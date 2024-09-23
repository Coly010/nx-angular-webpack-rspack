import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Component } from './lib98.component';

describe('Lib98Component', () => {
  let component: Lib98Component;
  let fixture: ComponentFixture<Lib98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib98Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
