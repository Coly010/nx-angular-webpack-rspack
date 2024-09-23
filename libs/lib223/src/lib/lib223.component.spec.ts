import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib223Component } from './lib223.component';

describe('Lib223Component', () => {
  let component: Lib223Component;
  let fixture: ComponentFixture<Lib223Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib223Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
