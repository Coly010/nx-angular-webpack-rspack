import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib140Component } from './lib140.component';

describe('Lib140Component', () => {
  let component: Lib140Component;
  let fixture: ComponentFixture<Lib140Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib140Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
