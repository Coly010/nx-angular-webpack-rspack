import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib117Component } from './lib117.component';

describe('Lib117Component', () => {
  let component: Lib117Component;
  let fixture: ComponentFixture<Lib117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib117Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
