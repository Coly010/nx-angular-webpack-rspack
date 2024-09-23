import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib245Component } from './lib245.component';

describe('Lib245Component', () => {
  let component: Lib245Component;
  let fixture: ComponentFixture<Lib245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib245Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
