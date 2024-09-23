import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib465Component } from './lib465.component';

describe('Lib465Component', () => {
  let component: Lib465Component;
  let fixture: ComponentFixture<Lib465Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib465Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
