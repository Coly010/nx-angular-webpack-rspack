import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib128Component } from './lib128.component';

describe('Lib128Component', () => {
  let component: Lib128Component;
  let fixture: ComponentFixture<Lib128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib128Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
