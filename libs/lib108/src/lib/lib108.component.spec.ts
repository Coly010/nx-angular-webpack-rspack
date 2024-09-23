import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib108Component } from './lib108.component';

describe('Lib108Component', () => {
  let component: Lib108Component;
  let fixture: ComponentFixture<Lib108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib108Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
