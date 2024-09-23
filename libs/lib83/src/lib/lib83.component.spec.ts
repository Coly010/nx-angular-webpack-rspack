import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Component } from './lib83.component';

describe('Lib83Component', () => {
  let component: Lib83Component;
  let fixture: ComponentFixture<Lib83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib83Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
