import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib763Component } from './lib763.component';

describe('Lib763Component', () => {
  let component: Lib763Component;
  let fixture: ComponentFixture<Lib763Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib763Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
