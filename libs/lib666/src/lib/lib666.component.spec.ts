import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib666Component } from './lib666.component';

describe('Lib666Component', () => {
  let component: Lib666Component;
  let fixture: ComponentFixture<Lib666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib666Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
