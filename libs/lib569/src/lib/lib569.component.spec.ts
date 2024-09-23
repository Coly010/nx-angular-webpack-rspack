import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib569Component } from './lib569.component';

describe('Lib569Component', () => {
  let component: Lib569Component;
  let fixture: ComponentFixture<Lib569Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib569Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
