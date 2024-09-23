import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib427Component } from './lib427.component';

describe('Lib427Component', () => {
  let component: Lib427Component;
  let fixture: ComponentFixture<Lib427Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib427Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
