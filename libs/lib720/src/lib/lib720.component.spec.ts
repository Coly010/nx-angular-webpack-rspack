import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib720Component } from './lib720.component';

describe('Lib720Component', () => {
  let component: Lib720Component;
  let fixture: ComponentFixture<Lib720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib720Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
