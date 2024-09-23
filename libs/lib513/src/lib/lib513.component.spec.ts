import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib513Component } from './lib513.component';

describe('Lib513Component', () => {
  let component: Lib513Component;
  let fixture: ComponentFixture<Lib513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib513Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
