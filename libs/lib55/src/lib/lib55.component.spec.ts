import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Component } from './lib55.component';

describe('Lib55Component', () => {
  let component: Lib55Component;
  let fixture: ComponentFixture<Lib55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib55Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
