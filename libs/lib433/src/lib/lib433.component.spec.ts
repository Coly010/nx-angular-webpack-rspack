import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib433Component } from './lib433.component';

describe('Lib433Component', () => {
  let component: Lib433Component;
  let fixture: ComponentFixture<Lib433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib433Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
