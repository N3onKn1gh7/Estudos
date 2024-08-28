package com.marcos.rpg.generator.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String race;
    private String characterClass;
    
    
    private int forca;
    private int destreza;
    private int inteligencia;
    private int sabedoria;
    private int carisma;
    
    


	// Construtor com parâmetros
    public Character(String name, String race, String characterClass) {
        this.name = name;
        this.race = race;
        this.characterClass = characterClass;
    }
    public Character(int forca, int destreza, int inteligencia, int sabedoria, int carisma) {
    	super();
    	this.forca = forca;
    	this.destreza = destreza;
    	this.inteligencia = inteligencia;
    	this.sabedoria = sabedoria;
    	this.carisma = carisma;
    }

    // Construtor 
    public Character(String name2, String characterClass2, String race2, int strength, int dexterity, int intelligence, int wisdom, int charisma) {
    }

    // Getters e Setters 
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }
	public int getForca() {
		return forca;
	}
	public void setForca(int forca) {
		this.forca = forca;
	}
	public int getDestreza() {
		return destreza;
	}
	public void setDestreza(int destreza) {
		this.destreza = destreza;
	}
	public int getInteligencia() {
		return inteligencia;
	}
	public void setInteligencia(int inteligencia) {
		this.inteligencia = inteligencia;
	}
	public int getSabedoria() {
		return sabedoria;
	}
	public void setSabedoria(int sabedoria) {
		this.sabedoria = sabedoria;
	}
	public int getCarisma() {
		return carisma;
	}
	public void setCarisma(int carisma) {
		this.carisma = carisma;
	}
    
    
}

