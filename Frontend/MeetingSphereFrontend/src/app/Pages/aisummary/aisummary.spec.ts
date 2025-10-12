import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AISummary } from './aisummary';

describe('AISummary', () => {
  let component: AISummary;
  let fixture: ComponentFixture<AISummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AISummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AISummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
