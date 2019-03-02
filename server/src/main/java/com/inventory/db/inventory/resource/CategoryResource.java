package com.inventory.db.inventory.resource;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.db.inventory.model.Category;
import com.inventory.db.inventory.model.Product;
import com.inventory.db.inventory.repository.CategoryRepository;
import com.inventory.db.inventory.model.Product;

@CrossOrigin
@RestController
@RequestMapping(value="/category")
public class CategoryResource {
	@Autowired
	CategoryRepository categoryRepository;

	@GetMapping(value="/all")
	public List<Category> getAll(){
		return categoryRepository.findAll();
	}

	@GetMapping(value="/find/{id}")
	public List<Product> getProducts(@PathVariable("id") long id) {
		Optional<Category> possiblyCategory = categoryRepository.findById((int) id);
		if (!possiblyCategory.isPresent()) return new ArrayList<Product>();
		Category category = (Category) possiblyCategory.get();
		Set<Product> products = category.allProducts();
		return new ArrayList<Product>(products);
	}
	@GetMapping("/sub/{id}")
	public List<Category> getSubCategory(@PathVariable("id") long id){
		return categoryRepository.findSubCategory((int) id);
	}
}

