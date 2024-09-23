import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib736Component } from './lib736.component';

describe('Lib736Component', () => {
  let component: Lib736Component;
  let fixture: ComponentFixture<Lib736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib736Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
