import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib125Component } from './lib125.component';

describe('Lib125Component', () => {
  let component: Lib125Component;
  let fixture: ComponentFixture<Lib125Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib125Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
