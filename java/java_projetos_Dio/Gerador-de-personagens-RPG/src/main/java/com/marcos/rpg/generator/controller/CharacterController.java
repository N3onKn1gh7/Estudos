package com.marcos.rpg.generator.controller;

import com.marcos.rpg.generator.facade.CharacterFacade;
import com.marcos.rpg.generator.model.Character;
import com.marcos.rpg.generator.strategy.CharacterStrategy;
import com.marcos.rpg.generator.strategy.ClericStrategy;
import com.marcos.rpg.generator.strategy.MageStrategy;
import com.marcos.rpg.generator.strategy.RogueStrategy;
import com.marcos.rpg.generator.strategy.WarriorStrategy;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {

    private CharacterFacade facade;

    public CharacterController() {
        this.facade = new CharacterFacade();
    }

    @PostMapping("/warrior")
    public Character createWarrior(@RequestParam String name, @RequestParam String race) {
    	CharacterStrategy strategy = new WarriorStrategy();
    	return facade.generateCharacter(name, race, strategy);
    }
    @PostMapping("/mage")
    public Character createMage(@RequestParam String name, @RequestParam String race) {
    	CharacterStrategy strategy = new MageStrategy();
    	return facade.generateCharacter(name, race, strategy);
    }
    @PostMapping("/cleric")
    public Character createCleric(@RequestParam String name, @RequestParam String race) {
    	CharacterStrategy strategy = new ClericStrategy();
    	return facade.generateCharacter(name, race, strategy);
    }
    @PostMapping("/rogue")
    public Character createRogue(@RequestParam String name, @RequestParam String race) {
    	CharacterStrategy strategy = new RogueStrategy();
    	return facade.generateCharacter(name, race, strategy);
    }

    
}
