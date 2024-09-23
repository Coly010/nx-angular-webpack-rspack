import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib295Component } from './lib295.component';

describe('Lib295Component', () => {
  let component: Lib295Component;
  let fixture: ComponentFixture<Lib295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib295Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
