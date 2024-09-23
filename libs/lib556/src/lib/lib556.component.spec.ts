import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib556Component } from './lib556.component';

describe('Lib556Component', () => {
  let component: Lib556Component;
  let fixture: ComponentFixture<Lib556Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib556Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
