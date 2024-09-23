import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib629Component } from './lib629.component';

describe('Lib629Component', () => {
  let component: Lib629Component;
  let fixture: ComponentFixture<Lib629Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib629Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
