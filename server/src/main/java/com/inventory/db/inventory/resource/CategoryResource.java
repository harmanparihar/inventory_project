package com.inventory.db.inventory.resource;

import java.util.*; 

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

	private List<Map<String, Object>> getSubCategoriesForCategory(Category parentCategory) {
		List<Category> categories;
		if (parentCategory == null) {
			categories = categoryRepository.findSubCategory(0);
		} else {
			categories = categoryRepository.findSubCategory(new Integer(parentCategory.getCategory_id()));
		}

		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		for (int counter = 0; counter < categories.size(); counter++) {
			Category category = (Category)categories.get(counter);
			int id = category.getCategory_id();
			String name = category.getCategory_name();
			int parent_id = category.getParent_category();
			Map<String, Object> current_category = new HashMap<String, Object>();
			current_category.put("id", new Integer(id));
			current_category.put("parent_id", new Integer(parent_id));
			current_category.put("name", name);
			current_category.put("subcategories", this.getSubCategoriesForCategory(category));
			data.add(current_category);
		}
		return data;
	}

	@GetMapping(value="/all")
	public List<Map<String, Object>> getAll(){
		return this.getSubCategoriesForCategory(null);
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
		return categoryRepository.findSubCategory(new Integer((int) id));
	}
}

