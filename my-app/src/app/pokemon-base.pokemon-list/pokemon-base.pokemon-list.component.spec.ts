import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBasePokemonListComponent } from './pokemon-base.pokemon-list.component';

describe('PokemonBasePokemonListComponent', () => {
  let component: PokemonBasePokemonListComponent;
  let fixture: ComponentFixture<PokemonBasePokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonBasePokemonListComponent]
    });
    fixture = TestBed.createComponent(PokemonBasePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
