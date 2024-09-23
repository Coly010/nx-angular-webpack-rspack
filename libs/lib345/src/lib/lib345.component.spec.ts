import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib345Component } from './lib345.component';

describe('Lib345Component', () => {
  let component: Lib345Component;
  let fixture: ComponentFixture<Lib345Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib345Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
