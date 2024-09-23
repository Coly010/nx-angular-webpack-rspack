import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Component } from './lib22.component';

describe('Lib22Component', () => {
  let component: Lib22Component;
  let fixture: ComponentFixture<Lib22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
