import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib270Component } from './lib270.component';

describe('Lib270Component', () => {
  let component: Lib270Component;
  let fixture: ComponentFixture<Lib270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib270Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
