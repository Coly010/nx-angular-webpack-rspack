import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib536Component } from './lib536.component';

describe('Lib536Component', () => {
  let component: Lib536Component;
  let fixture: ComponentFixture<Lib536Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib536Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
