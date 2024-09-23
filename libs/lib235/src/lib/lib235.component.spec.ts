import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib235Component } from './lib235.component';

describe('Lib235Component', () => {
  let component: Lib235Component;
  let fixture: ComponentFixture<Lib235Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib235Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
