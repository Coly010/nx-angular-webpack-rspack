import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib476Component } from './lib476.component';

describe('Lib476Component', () => {
  let component: Lib476Component;
  let fixture: ComponentFixture<Lib476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib476Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
