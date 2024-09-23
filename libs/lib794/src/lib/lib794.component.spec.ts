import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib794Component } from './lib794.component';

describe('Lib794Component', () => {
  let component: Lib794Component;
  let fixture: ComponentFixture<Lib794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib794Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
