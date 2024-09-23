import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib680Component } from './lib680.component';

describe('Lib680Component', () => {
  let component: Lib680Component;
  let fixture: ComponentFixture<Lib680Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib680Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
