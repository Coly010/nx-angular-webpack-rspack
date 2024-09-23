import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib451Component } from './lib451.component';

describe('Lib451Component', () => {
  let component: Lib451Component;
  let fixture: ComponentFixture<Lib451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib451Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
