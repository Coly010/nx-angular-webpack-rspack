import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib454Component } from './lib454.component';

describe('Lib454Component', () => {
  let component: Lib454Component;
  let fixture: ComponentFixture<Lib454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib454Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
