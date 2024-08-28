package com.marcos.rpg.generator.service;

import com.marcos.rpg.generator.model.Character;
import java.util.Random;

public class CharacterGenerator {

    private static CharacterGenerator instance;
    private Random random;

    // Construtor privado para implementar o padrão Singleton
    private CharacterGenerator() {
        random = new Random();
    }

    // Método para obter a instância única da classe
    public static synchronized CharacterGenerator getInstance() {
        if (instance == null) {
            instance = new CharacterGenerator();
        }
        return instance;
    }

    // Método para gerar um personagem com atributos aleatórios
    public Character generateCharacter(String name, String characterClass, String race) {
        int strength = generateRandomAttribute();
        int dexterity = generateRandomAttribute();
        int intelligence = generateRandomAttribute();
        int wisdom = generateRandomAttribute();
        int charisma = generateRandomAttribute();

        // Cria um novo personagem com os atributos gerados
        return new Character(name, characterClass, race, strength, dexterity, intelligence, wisdom, charisma);
    }

    // Método auxiliar para gerar um valor aleatório entre 3 e 18
    private int generateRandomAttribute() {
        return random.nextInt(18 - 3 + 1) + 3; // Gera um valor aleatório entre 3 e 18
    }
}
