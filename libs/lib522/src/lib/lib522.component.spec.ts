import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib522Component } from './lib522.component';

describe('Lib522Component', () => {
  let component: Lib522Component;
  let fixture: ComponentFixture<Lib522Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib522Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
