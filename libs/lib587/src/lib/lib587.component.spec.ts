import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib587Component } from './lib587.component';

describe('Lib587Component', () => {
  let component: Lib587Component;
  let fixture: ComponentFixture<Lib587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib587Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
