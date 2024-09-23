import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib732Component } from './lib732.component';

describe('Lib732Component', () => {
  let component: Lib732Component;
  let fixture: ComponentFixture<Lib732Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib732Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
