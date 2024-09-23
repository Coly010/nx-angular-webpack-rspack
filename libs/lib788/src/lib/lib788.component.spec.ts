import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib788Component } from './lib788.component';

describe('Lib788Component', () => {
  let component: Lib788Component;
  let fixture: ComponentFixture<Lib788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib788Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
