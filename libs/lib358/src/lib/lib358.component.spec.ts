import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib358Component } from './lib358.component';

describe('Lib358Component', () => {
  let component: Lib358Component;
  let fixture: ComponentFixture<Lib358Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib358Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
