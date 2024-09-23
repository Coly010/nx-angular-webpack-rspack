import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib719Component } from './lib719.component';

describe('Lib719Component', () => {
  let component: Lib719Component;
  let fixture: ComponentFixture<Lib719Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib719Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
