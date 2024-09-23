import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib275Component } from './lib275.component';

describe('Lib275Component', () => {
  let component: Lib275Component;
  let fixture: ComponentFixture<Lib275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib275Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
