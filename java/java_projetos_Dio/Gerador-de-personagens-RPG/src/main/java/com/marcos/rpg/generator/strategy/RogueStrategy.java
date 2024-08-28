package com.marcos.rpg.generator.strategy;

import com.marcos.rpg.generator.model.Character;
import com.marcos.rpg.generator.model.CharacterClass;

public class RogueStrategy implements CharacterStrategy {
    @Override
    public void apply(Character character) {
        character.setCharacterClass(CharacterClass.ROGUE.name());
        // Outras configurações específicas de Ladino
    }
}
