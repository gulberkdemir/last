import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTileComponent } from './slide-tile.component';

describe('SlideTileComponent', () => {
  let component: SlideTileComponent;
  let fixture: ComponentFixture<SlideTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SlideTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
