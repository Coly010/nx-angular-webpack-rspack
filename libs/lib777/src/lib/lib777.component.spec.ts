import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib777Component } from './lib777.component';

describe('Lib777Component', () => {
  let component: Lib777Component;
  let fixture: ComponentFixture<Lib777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib777Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
