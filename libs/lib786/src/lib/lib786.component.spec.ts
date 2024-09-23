import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib786Component } from './lib786.component';

describe('Lib786Component', () => {
  let component: Lib786Component;
  let fixture: ComponentFixture<Lib786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib786Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
