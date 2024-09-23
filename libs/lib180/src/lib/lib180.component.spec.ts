import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib180Component } from './lib180.component';

describe('Lib180Component', () => {
  let component: Lib180Component;
  let fixture: ComponentFixture<Lib180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib180Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
