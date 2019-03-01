package com.inventory.db.inventory.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Category {
	
	@Id
	@GeneratedValue
	@Column(name="category_id")
	private Integer category_id;
	
	@Column(name="category_name")
	private String category_name;

	@ManyToMany(mappedBy = "categories")
	private Set<Product> products = new HashSet<>();
	
	public Set<Product> allProducts() {
		return products;
	}

	@Column(name="parent_category")
	private Integer parent_category;
	
	public Integer getParent_category() {
		return parent_category;
	}
	public void setParent_category(Integer parent_category) {
		this.parent_category = parent_category;
	}
	public Integer getCategory_id() {
		return category_id;
	}
	public void setCategory_id(Integer category_id) {
		this.category_id = category_id;
	}
	public String getCategory_name() {
		return category_name;
	}
	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
	
}
