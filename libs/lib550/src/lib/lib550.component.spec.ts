import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib550Component } from './lib550.component';

describe('Lib550Component', () => {
  let component: Lib550Component;
  let fixture: ComponentFixture<Lib550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib550Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
