import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib651Component } from './lib651.component';

describe('Lib651Component', () => {
  let component: Lib651Component;
  let fixture: ComponentFixture<Lib651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib651Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
