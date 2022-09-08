import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPokemonComponent } from './contenedor-pokemon.component';

describe('ContenedorPokemonComponent', () => {
  let component: ContenedorPokemonComponent;
  let fixture: ComponentFixture<ContenedorPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
