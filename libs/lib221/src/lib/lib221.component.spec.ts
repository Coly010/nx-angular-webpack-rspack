import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib221Component } from './lib221.component';

describe('Lib221Component', () => {
  let component: Lib221Component;
  let fixture: ComponentFixture<Lib221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib221Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
