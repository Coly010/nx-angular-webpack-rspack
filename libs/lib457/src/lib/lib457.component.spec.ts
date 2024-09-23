import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib457Component } from './lib457.component';

describe('Lib457Component', () => {
  let component: Lib457Component;
  let fixture: ComponentFixture<Lib457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib457Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
