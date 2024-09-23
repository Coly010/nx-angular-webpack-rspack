import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Component } from './lib78.component';

describe('Lib78Component', () => {
  let component: Lib78Component;
  let fixture: ComponentFixture<Lib78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib78Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
