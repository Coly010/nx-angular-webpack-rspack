import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib489Component } from './lib489.component';

describe('Lib489Component', () => {
  let component: Lib489Component;
  let fixture: ComponentFixture<Lib489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib489Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
