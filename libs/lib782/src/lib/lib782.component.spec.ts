import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib782Component } from './lib782.component';

describe('Lib782Component', () => {
  let component: Lib782Component;
  let fixture: ComponentFixture<Lib782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib782Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
