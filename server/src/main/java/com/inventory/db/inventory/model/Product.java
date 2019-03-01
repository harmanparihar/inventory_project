package com.inventory.db.inventory.model;

import java.util.Set;

import javax.persistence.*;

@Entity
public class Product {
	
	@Id
	@GeneratedValue
	@Column(name="product_id")
	private Integer product_id;
	
	@Column(name="product_name")
	private String product_name;
	
	@Column(name="product_description")
	private String product_description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "category_product_mapping",
        joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "product_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id", referencedColumnName = "category_id"))
    private Set<Category> categories;


	public Integer getProduct_id() {
		return product_id;
	}

	public void setProduct_id(Integer product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_description() {
		return product_description;
	}

	public void setProduct_description(String product_description) {
		this.product_description = product_description;
	}

	public Set<Category> getCategories() {
		return categories;
	}

	public void setCategories(Set<Category> categories) {
		this.categories = categories;
	}
    
}
