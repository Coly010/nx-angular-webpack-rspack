import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib291Component } from './lib291.component';

describe('Lib291Component', () => {
  let component: Lib291Component;
  let fixture: ComponentFixture<Lib291Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib291Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
