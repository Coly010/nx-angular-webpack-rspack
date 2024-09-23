import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Component } from './lib99.component';

describe('Lib99Component', () => {
  let component: Lib99Component;
  let fixture: ComponentFixture<Lib99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib99Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
