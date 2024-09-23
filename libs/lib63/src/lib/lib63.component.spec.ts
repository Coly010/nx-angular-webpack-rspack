import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Component } from './lib63.component';

describe('Lib63Component', () => {
  let component: Lib63Component;
  let fixture: ComponentFixture<Lib63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib63Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
