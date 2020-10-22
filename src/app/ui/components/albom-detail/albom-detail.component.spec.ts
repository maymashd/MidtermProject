import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbomDetailComponent } from './albom-detail.component';

describe('AlbomDetailComponent', () => {
  let component: AlbomDetailComponent;
  let fixture: ComponentFixture<AlbomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
