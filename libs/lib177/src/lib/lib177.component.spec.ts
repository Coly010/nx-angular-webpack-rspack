import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib177Component } from './lib177.component';

describe('Lib177Component', () => {
  let component: Lib177Component;
  let fixture: ComponentFixture<Lib177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib177Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
