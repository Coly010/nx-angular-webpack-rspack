import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib159Component } from './lib159.component';

describe('Lib159Component', () => {
  let component: Lib159Component;
  let fixture: ComponentFixture<Lib159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib159Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
