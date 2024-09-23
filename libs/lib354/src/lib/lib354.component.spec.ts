import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib354Component } from './lib354.component';

describe('Lib354Component', () => {
  let component: Lib354Component;
  let fixture: ComponentFixture<Lib354Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib354Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
