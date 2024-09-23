import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib461Component } from './lib461.component';

describe('Lib461Component', () => {
  let component: Lib461Component;
  let fixture: ComponentFixture<Lib461Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib461Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
