package com.marcos.rpg.generator.strategy;

import com.marcos.rpg.generator.model.Character;
import com.marcos.rpg.generator.model.CharacterClass;

public class MageStrategy implements CharacterStrategy {
    @Override
    public void apply(Character character) {
        character.setCharacterClass(CharacterClass.MAGE.name());
        // Outras configurações específicas de Mago
    }
}
