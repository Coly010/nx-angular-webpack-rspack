import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib371Component } from './lib371.component';

describe('Lib371Component', () => {
  let component: Lib371Component;
  let fixture: ComponentFixture<Lib371Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib371Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
