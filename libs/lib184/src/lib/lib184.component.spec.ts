import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib184Component } from './lib184.component';

describe('Lib184Component', () => {
  let component: Lib184Component;
  let fixture: ComponentFixture<Lib184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib184Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
