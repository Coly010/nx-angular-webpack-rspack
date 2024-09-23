import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib441Component } from './lib441.component';

describe('Lib441Component', () => {
  let component: Lib441Component;
  let fixture: ComponentFixture<Lib441Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib441Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
