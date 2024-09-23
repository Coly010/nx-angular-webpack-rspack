import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib667Component } from './lib667.component';

describe('Lib667Component', () => {
  let component: Lib667Component;
  let fixture: ComponentFixture<Lib667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib667Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
