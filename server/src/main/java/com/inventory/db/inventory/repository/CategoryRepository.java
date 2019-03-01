package com.inventory.db.inventory.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.inventory.db.inventory.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	
}
