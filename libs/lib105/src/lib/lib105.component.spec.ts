import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib105Component } from './lib105.component';

describe('Lib105Component', () => {
  let component: Lib105Component;
  let fixture: ComponentFixture<Lib105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib105Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
