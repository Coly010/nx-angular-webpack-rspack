import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib480Component } from './lib480.component';

describe('Lib480Component', () => {
  let component: Lib480Component;
  let fixture: ComponentFixture<Lib480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib480Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
