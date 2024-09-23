import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib649Component } from './lib649.component';

describe('Lib649Component', () => {
  let component: Lib649Component;
  let fixture: ComponentFixture<Lib649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib649Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
