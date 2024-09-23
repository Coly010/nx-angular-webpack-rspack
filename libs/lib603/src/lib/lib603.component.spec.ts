import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib603Component } from './lib603.component';

describe('Lib603Component', () => {
  let component: Lib603Component;
  let fixture: ComponentFixture<Lib603Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib603Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
