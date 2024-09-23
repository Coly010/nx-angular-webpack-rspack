import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib319Component } from './lib319.component';

describe('Lib319Component', () => {
  let component: Lib319Component;
  let fixture: ComponentFixture<Lib319Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib319Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
