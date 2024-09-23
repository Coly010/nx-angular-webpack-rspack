import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib403Component } from './lib403.component';

describe('Lib403Component', () => {
  let component: Lib403Component;
  let fixture: ComponentFixture<Lib403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib403Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
