import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib710Component } from './lib710.component';

describe('Lib710Component', () => {
  let component: Lib710Component;
  let fixture: ComponentFixture<Lib710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib710Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
