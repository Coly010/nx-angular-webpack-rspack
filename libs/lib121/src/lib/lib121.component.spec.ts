import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib121Component } from './lib121.component';

describe('Lib121Component', () => {
  let component: Lib121Component;
  let fixture: ComponentFixture<Lib121Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib121Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
