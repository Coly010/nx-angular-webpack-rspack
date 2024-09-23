import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib495Component } from './lib495.component';

describe('Lib495Component', () => {
  let component: Lib495Component;
  let fixture: ComponentFixture<Lib495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib495Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
