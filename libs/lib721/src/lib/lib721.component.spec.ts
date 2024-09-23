import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib721Component } from './lib721.component';

describe('Lib721Component', () => {
  let component: Lib721Component;
  let fixture: ComponentFixture<Lib721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib721Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
