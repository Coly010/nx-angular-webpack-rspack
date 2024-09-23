import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib370Component } from './lib370.component';

describe('Lib370Component', () => {
  let component: Lib370Component;
  let fixture: ComponentFixture<Lib370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib370Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
