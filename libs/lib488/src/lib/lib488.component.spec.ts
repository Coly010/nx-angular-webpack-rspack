import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib488Component } from './lib488.component';

describe('Lib488Component', () => {
  let component: Lib488Component;
  let fixture: ComponentFixture<Lib488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib488Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
