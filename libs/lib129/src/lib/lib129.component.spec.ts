import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib129Component } from './lib129.component';

describe('Lib129Component', () => {
  let component: Lib129Component;
  let fixture: ComponentFixture<Lib129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib129Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
