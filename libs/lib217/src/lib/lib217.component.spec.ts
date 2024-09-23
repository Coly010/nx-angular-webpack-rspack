import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib217Component } from './lib217.component';

describe('Lib217Component', () => {
  let component: Lib217Component;
  let fixture: ComponentFixture<Lib217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib217Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
