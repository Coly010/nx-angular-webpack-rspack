import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib642Component } from './lib642.component';

describe('Lib642Component', () => {
  let component: Lib642Component;
  let fixture: ComponentFixture<Lib642Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib642Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
