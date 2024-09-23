import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib148Component } from './lib148.component';

describe('Lib148Component', () => {
  let component: Lib148Component;
  let fixture: ComponentFixture<Lib148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib148Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
