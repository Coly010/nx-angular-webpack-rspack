import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib691Component } from './lib691.component';

describe('Lib691Component', () => {
  let component: Lib691Component;
  let fixture: ComponentFixture<Lib691Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib691Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
