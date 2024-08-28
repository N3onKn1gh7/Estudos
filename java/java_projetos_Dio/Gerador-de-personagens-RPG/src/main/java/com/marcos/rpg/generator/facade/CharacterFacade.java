package com.marcos.rpg.generator.facade;

import com.marcos.rpg.generator.model.Character;
import com.marcos.rpg.generator.service.CharacterGenerator;
import com.marcos.rpg.generator.strategy.CharacterStrategy;

public class CharacterFacade {

    private CharacterGenerator generator;

    public CharacterFacade() {
        this.generator = CharacterGenerator.getInstance();
    }

    public Character generateCharacter(String name, String race, CharacterStrategy strategy) {
        Character character = generator.generateCharacter(name, race, null);
        strategy.apply(character);
        return character;
    }
}
