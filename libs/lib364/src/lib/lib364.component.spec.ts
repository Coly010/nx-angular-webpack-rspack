import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib364Component } from './lib364.component';

describe('Lib364Component', () => {
  let component: Lib364Component;
  let fixture: ComponentFixture<Lib364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib364Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
