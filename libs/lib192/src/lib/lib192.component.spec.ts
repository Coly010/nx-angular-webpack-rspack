import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib192Component } from './lib192.component';

describe('Lib192Component', () => {
  let component: Lib192Component;
  let fixture: ComponentFixture<Lib192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib192Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
