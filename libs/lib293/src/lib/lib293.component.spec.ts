import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib293Component } from './lib293.component';

describe('Lib293Component', () => {
  let component: Lib293Component;
  let fixture: ComponentFixture<Lib293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib293Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
