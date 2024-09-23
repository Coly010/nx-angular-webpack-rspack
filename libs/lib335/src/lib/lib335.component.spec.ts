import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib335Component } from './lib335.component';

describe('Lib335Component', () => {
  let component: Lib335Component;
  let fixture: ComponentFixture<Lib335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib335Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
