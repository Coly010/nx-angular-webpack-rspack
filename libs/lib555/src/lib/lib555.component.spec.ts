import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib555Component } from './lib555.component';

describe('Lib555Component', () => {
  let component: Lib555Component;
  let fixture: ComponentFixture<Lib555Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib555Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
