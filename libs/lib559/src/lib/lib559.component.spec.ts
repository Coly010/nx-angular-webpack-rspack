import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib559Component } from './lib559.component';

describe('Lib559Component', () => {
  let component: Lib559Component;
  let fixture: ComponentFixture<Lib559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib559Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
