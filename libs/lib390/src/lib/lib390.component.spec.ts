import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib390Component } from './lib390.component';

describe('Lib390Component', () => {
  let component: Lib390Component;
  let fixture: ComponentFixture<Lib390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib390Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
