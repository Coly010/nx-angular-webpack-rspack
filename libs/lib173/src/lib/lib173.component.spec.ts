import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib173Component } from './lib173.component';

describe('Lib173Component', () => {
  let component: Lib173Component;
  let fixture: ComponentFixture<Lib173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib173Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
