import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib585Component } from './lib585.component';

describe('Lib585Component', () => {
  let component: Lib585Component;
  let fixture: ComponentFixture<Lib585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib585Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
