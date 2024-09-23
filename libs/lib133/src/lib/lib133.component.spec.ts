import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib133Component } from './lib133.component';

describe('Lib133Component', () => {
  let component: Lib133Component;
  let fixture: ComponentFixture<Lib133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib133Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
