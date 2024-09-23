import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib312Component } from './lib312.component';

describe('Lib312Component', () => {
  let component: Lib312Component;
  let fixture: ComponentFixture<Lib312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib312Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
