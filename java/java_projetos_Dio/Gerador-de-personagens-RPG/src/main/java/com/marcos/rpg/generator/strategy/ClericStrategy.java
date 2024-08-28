package com.marcos.rpg.generator.strategy;

import com.marcos.rpg.generator.model.Character;
import com.marcos.rpg.generator.model.CharacterClass;

public class ClericStrategy implements CharacterStrategy {
    @Override
    public void apply(Character character) {
        character.setCharacterClass(CharacterClass.CLERIC.name());
        // Outras configurações específicas de Clérigo
    }
}
