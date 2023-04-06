import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuebleriaComponent } from './muebleria.component';

describe('MuebleriaComponent', () => {
  let component: MuebleriaComponent;
  let fixture: ComponentFixture<MuebleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuebleriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuebleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
