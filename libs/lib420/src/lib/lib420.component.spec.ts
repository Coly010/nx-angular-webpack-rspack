import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib420Component } from './lib420.component';

describe('Lib420Component', () => {
  let component: Lib420Component;
  let fixture: ComponentFixture<Lib420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib420Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
