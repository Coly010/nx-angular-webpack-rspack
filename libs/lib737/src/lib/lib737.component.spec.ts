import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib737Component } from './lib737.component';

describe('Lib737Component', () => {
  let component: Lib737Component;
  let fixture: ComponentFixture<Lib737Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib737Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
