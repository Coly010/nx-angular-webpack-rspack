import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib308Component } from './lib308.component';

describe('Lib308Component', () => {
  let component: Lib308Component;
  let fixture: ComponentFixture<Lib308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib308Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
