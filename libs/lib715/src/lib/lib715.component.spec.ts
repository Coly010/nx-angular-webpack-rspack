import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib715Component } from './lib715.component';

describe('Lib715Component', () => {
  let component: Lib715Component;
  let fixture: ComponentFixture<Lib715Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib715Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
