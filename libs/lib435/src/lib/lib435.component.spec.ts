import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib435Component } from './lib435.component';

describe('Lib435Component', () => {
  let component: Lib435Component;
  let fixture: ComponentFixture<Lib435Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib435Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
