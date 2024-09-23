import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib508Component } from './lib508.component';

describe('Lib508Component', () => {
  let component: Lib508Component;
  let fixture: ComponentFixture<Lib508Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib508Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
