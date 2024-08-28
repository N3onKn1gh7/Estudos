package com.exemplo.biblioteca.controller;

import com.exemplo.biblioteca.model.Livro;
import com.exemplo.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @GetMapping
    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    @PostMapping
    public Livro adicionarLivro(@RequestBody Livro livro) {
        return livroRepository.save(livro);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> buscarPorId(@PathVariable Long id) {
        return livroRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable Long id, @RequestBody Livro livroDetalhes) {
        return livroRepository.findById(id)
                .map(livro -> {
                    livro.setTitulo(livroDetalhes.getTitulo());
                    livro.setAutor(livroDetalhes.getAutor());
                    livro.setGenero(livroDetalhes.getGenero());
                    livro.setAnoPublicacao(livroDetalhes.getAnoPublicacao());
                    Livro livroAtualizado = livroRepository.save(livro);
                    return ResponseEntity.ok(livroAtualizado);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarLivro(@PathVariable Long id) {
        return livroRepository.findById(id)
                .map(livro -> {
                    livroRepository.delete(livro);
                    return ResponseEntity.noContent().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}

