import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonContentComponent } from './pokemon-content.component';

describe('PokemonContentComponent', () => {
  let component: PokemonContentComponent;
  let fixture: ComponentFixture<PokemonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
