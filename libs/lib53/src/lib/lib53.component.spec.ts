import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Component } from './lib53.component';

describe('Lib53Component', () => {
  let component: Lib53Component;
  let fixture: ComponentFixture<Lib53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib53Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
