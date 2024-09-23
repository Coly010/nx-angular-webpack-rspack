import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib520Component } from './lib520.component';

describe('Lib520Component', () => {
  let component: Lib520Component;
  let fixture: ComponentFixture<Lib520Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib520Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
