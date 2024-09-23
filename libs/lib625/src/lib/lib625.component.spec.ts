import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib625Component } from './lib625.component';

describe('Lib625Component', () => {
  let component: Lib625Component;
  let fixture: ComponentFixture<Lib625Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib625Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
