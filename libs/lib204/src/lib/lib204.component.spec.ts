import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib204Component } from './lib204.component';

describe('Lib204Component', () => {
  let component: Lib204Component;
  let fixture: ComponentFixture<Lib204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib204Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
