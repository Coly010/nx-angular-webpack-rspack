import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib498Component } from './lib498.component';

describe('Lib498Component', () => {
  let component: Lib498Component;
  let fixture: ComponentFixture<Lib498Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib498Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
