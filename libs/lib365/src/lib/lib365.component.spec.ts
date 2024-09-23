import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib365Component } from './lib365.component';

describe('Lib365Component', () => {
  let component: Lib365Component;
  let fixture: ComponentFixture<Lib365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib365Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
