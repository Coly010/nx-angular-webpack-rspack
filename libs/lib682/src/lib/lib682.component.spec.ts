import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib682Component } from './lib682.component';

describe('Lib682Component', () => {
  let component: Lib682Component;
  let fixture: ComponentFixture<Lib682Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib682Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
