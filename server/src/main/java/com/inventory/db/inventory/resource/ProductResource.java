package com.inventory.db.inventory.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.db.inventory.model.Product;
import com.inventory.db.inventory.repository.ProductRepository;

@CrossOrigin
@RestController
@RequestMapping(value="/product")
public class ProductResource {
	@Autowired
	ProductRepository productRepository;

	@GetMapping(value="/all")
	public List<Product> getAll(){
		return productRepository.findAll();
	}
	@DeleteMapping(value="/delete/{id}")
	public String deletePost(@PathVariable("id") long id) {
		productRepository.deleteById((int) id);
	    return "ok";
	}
}

