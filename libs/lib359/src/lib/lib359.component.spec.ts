import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib359Component } from './lib359.component';

describe('Lib359Component', () => {
  let component: Lib359Component;
  let fixture: ComponentFixture<Lib359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib359Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
