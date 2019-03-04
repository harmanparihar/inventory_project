package com.inventory.db.inventory.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;

import com.inventory.db.inventory.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	@Query(value="select * from category c where c.parent_category= :id",nativeQuery=true)
	List<Category> findSubCategory(Integer id);
}
