import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib514Component } from './lib514.component';

describe('Lib514Component', () => {
  let component: Lib514Component;
  let fixture: ComponentFixture<Lib514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib514Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
