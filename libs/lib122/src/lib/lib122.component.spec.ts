import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib122Component } from './lib122.component';

describe('Lib122Component', () => {
  let component: Lib122Component;
  let fixture: ComponentFixture<Lib122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib122Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
