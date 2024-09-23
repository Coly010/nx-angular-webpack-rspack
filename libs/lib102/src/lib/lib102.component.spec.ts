import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib102Component } from './lib102.component';

describe('Lib102Component', () => {
  let component: Lib102Component;
  let fixture: ComponentFixture<Lib102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib102Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
