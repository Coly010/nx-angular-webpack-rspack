import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib548Component } from './lib548.component';

describe('Lib548Component', () => {
  let component: Lib548Component;
  let fixture: ComponentFixture<Lib548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib548Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
