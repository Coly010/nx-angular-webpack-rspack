import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib711Component } from './lib711.component';

describe('Lib711Component', () => {
  let component: Lib711Component;
  let fixture: ComponentFixture<Lib711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib711Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
