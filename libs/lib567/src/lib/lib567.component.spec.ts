import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib567Component } from './lib567.component';

describe('Lib567Component', () => {
  let component: Lib567Component;
  let fixture: ComponentFixture<Lib567Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib567Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib567Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
