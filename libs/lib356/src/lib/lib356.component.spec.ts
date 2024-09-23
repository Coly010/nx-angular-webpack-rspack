import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib356Component } from './lib356.component';

describe('Lib356Component', () => {
  let component: Lib356Component;
  let fixture: ComponentFixture<Lib356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib356Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
