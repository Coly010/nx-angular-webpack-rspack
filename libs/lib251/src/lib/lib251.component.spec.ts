import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib251Component } from './lib251.component';

describe('Lib251Component', () => {
  let component: Lib251Component;
  let fixture: ComponentFixture<Lib251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib251Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
