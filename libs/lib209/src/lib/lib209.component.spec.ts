import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib209Component } from './lib209.component';

describe('Lib209Component', () => {
  let component: Lib209Component;
  let fixture: ComponentFixture<Lib209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib209Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
