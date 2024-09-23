import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib493Component } from './lib493.component';

describe('Lib493Component', () => {
  let component: Lib493Component;
  let fixture: ComponentFixture<Lib493Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib493Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
