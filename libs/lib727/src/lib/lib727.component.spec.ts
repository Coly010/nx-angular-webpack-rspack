import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib727Component } from './lib727.component';

describe('Lib727Component', () => {
  let component: Lib727Component;
  let fixture: ComponentFixture<Lib727Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib727Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
