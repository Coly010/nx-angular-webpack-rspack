import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib367Component } from './lib367.component';

describe('Lib367Component', () => {
  let component: Lib367Component;
  let fixture: ComponentFixture<Lib367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib367Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
