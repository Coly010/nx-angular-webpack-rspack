import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib506Component } from './lib506.component';

describe('Lib506Component', () => {
  let component: Lib506Component;
  let fixture: ComponentFixture<Lib506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib506Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
