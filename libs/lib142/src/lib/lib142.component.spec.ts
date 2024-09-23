import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib142Component } from './lib142.component';

describe('Lib142Component', () => {
  let component: Lib142Component;
  let fixture: ComponentFixture<Lib142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib142Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
