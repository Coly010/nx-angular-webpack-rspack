import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib410Component } from './lib410.component';

describe('Lib410Component', () => {
  let component: Lib410Component;
  let fixture: ComponentFixture<Lib410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib410Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
