import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib504Component } from './lib504.component';

describe('Lib504Component', () => {
  let component: Lib504Component;
  let fixture: ComponentFixture<Lib504Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib504Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
