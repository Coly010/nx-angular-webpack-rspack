import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib392Component } from './lib392.component';

describe('Lib392Component', () => {
  let component: Lib392Component;
  let fixture: ComponentFixture<Lib392Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib392Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
