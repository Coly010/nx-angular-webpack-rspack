import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib418Component } from './lib418.component';

describe('Lib418Component', () => {
  let component: Lib418Component;
  let fixture: ComponentFixture<Lib418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib418Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
