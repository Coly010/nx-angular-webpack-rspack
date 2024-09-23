import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib463Component } from './lib463.component';

describe('Lib463Component', () => {
  let component: Lib463Component;
  let fixture: ComponentFixture<Lib463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib463Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
