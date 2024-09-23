import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib647Component } from './lib647.component';

describe('Lib647Component', () => {
  let component: Lib647Component;
  let fixture: ComponentFixture<Lib647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib647Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
