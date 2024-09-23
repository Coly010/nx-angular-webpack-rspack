import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib286Component } from './lib286.component';

describe('Lib286Component', () => {
  let component: Lib286Component;
  let fixture: ComponentFixture<Lib286Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib286Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
