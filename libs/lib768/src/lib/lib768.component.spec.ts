import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib768Component } from './lib768.component';

describe('Lib768Component', () => {
  let component: Lib768Component;
  let fixture: ComponentFixture<Lib768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib768Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
