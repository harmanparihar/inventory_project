package com.inventory.db.inventory.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.inventory.db.inventory.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
}
