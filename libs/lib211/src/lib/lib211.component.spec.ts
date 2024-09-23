import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib211Component } from './lib211.component';

describe('Lib211Component', () => {
  let component: Lib211Component;
  let fixture: ComponentFixture<Lib211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib211Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
