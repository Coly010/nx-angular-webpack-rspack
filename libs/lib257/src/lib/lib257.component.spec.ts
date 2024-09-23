import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib257Component } from './lib257.component';

describe('Lib257Component', () => {
  let component: Lib257Component;
  let fixture: ComponentFixture<Lib257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib257Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
