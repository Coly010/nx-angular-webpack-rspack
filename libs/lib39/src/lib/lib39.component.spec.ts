import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Component } from './lib39.component';

describe('Lib39Component', () => {
  let component: Lib39Component;
  let fixture: ComponentFixture<Lib39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
