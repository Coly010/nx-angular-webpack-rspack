import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib171Component } from './lib171.component';

describe('Lib171Component', () => {
  let component: Lib171Component;
  let fixture: ComponentFixture<Lib171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib171Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
