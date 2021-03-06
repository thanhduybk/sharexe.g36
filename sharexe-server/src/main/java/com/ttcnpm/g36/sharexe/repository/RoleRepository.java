package com.ttcnpm.g36.sharexe.repository;

import com.ttcnpm.g36.sharexe.model.Role;
import com.ttcnpm.g36.sharexe.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
