import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib660Component } from './lib660.component';

describe('Lib660Component', () => {
  let component: Lib660Component;
  let fixture: ComponentFixture<Lib660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib660Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
