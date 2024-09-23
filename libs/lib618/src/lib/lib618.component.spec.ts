import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib618Component } from './lib618.component';

describe('Lib618Component', () => {
  let component: Lib618Component;
  let fixture: ComponentFixture<Lib618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib618Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
