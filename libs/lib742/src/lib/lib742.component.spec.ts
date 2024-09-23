import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib742Component } from './lib742.component';

describe('Lib742Component', () => {
  let component: Lib742Component;
  let fixture: ComponentFixture<Lib742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib742Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
