import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib537Component } from './lib537.component';

describe('Lib537Component', () => {
  let component: Lib537Component;
  let fixture: ComponentFixture<Lib537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib537Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
