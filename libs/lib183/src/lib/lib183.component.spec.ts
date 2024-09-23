import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib183Component } from './lib183.component';

describe('Lib183Component', () => {
  let component: Lib183Component;
  let fixture: ComponentFixture<Lib183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib183Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
