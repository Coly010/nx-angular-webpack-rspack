import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib372Component } from './lib372.component';

describe('Lib372Component', () => {
  let component: Lib372Component;
  let fixture: ComponentFixture<Lib372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib372Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
