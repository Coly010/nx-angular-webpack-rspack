import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib193Component } from './lib193.component';

describe('Lib193Component', () => {
  let component: Lib193Component;
  let fixture: ComponentFixture<Lib193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib193Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
