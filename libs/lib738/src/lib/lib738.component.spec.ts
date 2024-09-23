import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib738Component } from './lib738.component';

describe('Lib738Component', () => {
  let component: Lib738Component;
  let fixture: ComponentFixture<Lib738Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib738Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
