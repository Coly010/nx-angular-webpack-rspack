import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib149Component } from './lib149.component';

describe('Lib149Component', () => {
  let component: Lib149Component;
  let fixture: ComponentFixture<Lib149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib149Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
