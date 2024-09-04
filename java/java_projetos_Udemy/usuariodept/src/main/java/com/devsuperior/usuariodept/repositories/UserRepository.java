package com.devsuperior.usuariodept.repositories;

import com.devsuperior.usuariodept.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Long> {
}
