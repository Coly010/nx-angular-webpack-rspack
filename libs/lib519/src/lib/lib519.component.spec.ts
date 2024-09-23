import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib519Component } from './lib519.component';

describe('Lib519Component', () => {
  let component: Lib519Component;
  let fixture: ComponentFixture<Lib519Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib519Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
