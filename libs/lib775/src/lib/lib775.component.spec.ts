import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib775Component } from './lib775.component';

describe('Lib775Component', () => {
  let component: Lib775Component;
  let fixture: ComponentFixture<Lib775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib775Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
