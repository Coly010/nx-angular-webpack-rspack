import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib579Component } from './lib579.component';

describe('Lib579Component', () => {
  let component: Lib579Component;
  let fixture: ComponentFixture<Lib579Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib579Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
