import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib114Component } from './lib114.component';

describe('Lib114Component', () => {
  let component: Lib114Component;
  let fixture: ComponentFixture<Lib114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib114Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
