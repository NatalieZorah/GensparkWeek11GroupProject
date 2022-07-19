package com.genspark.Pucci.Daos;

import com.genspark.Pucci.Entities.ERole;
import com.genspark.Pucci.Entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleDao extends JpaRepository<Role, Long> {
  Optional<Role> findByName(ERole name);
}
