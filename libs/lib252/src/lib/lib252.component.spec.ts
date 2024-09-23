import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib252Component } from './lib252.component';

describe('Lib252Component', () => {
  let component: Lib252Component;
  let fixture: ComponentFixture<Lib252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib252Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
