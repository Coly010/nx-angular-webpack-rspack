import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib353Component } from './lib353.component';

describe('Lib353Component', () => {
  let component: Lib353Component;
  let fixture: ComponentFixture<Lib353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib353Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
