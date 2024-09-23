import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib724Component } from './lib724.component';

describe('Lib724Component', () => {
  let component: Lib724Component;
  let fixture: ComponentFixture<Lib724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib724Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
