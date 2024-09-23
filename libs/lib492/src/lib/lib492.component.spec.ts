import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib492Component } from './lib492.component';

describe('Lib492Component', () => {
  let component: Lib492Component;
  let fixture: ComponentFixture<Lib492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib492Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
