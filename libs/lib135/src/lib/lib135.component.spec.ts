import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib135Component } from './lib135.component';

describe('Lib135Component', () => {
  let component: Lib135Component;
  let fixture: ComponentFixture<Lib135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib135Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
