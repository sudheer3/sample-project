import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { filter } from '@ember/object/computed';


export default Route.extend({
	
	model(params){
		
		
		const products = [
			{
				id: "0001",
				title:"Mi 4",
				category:"mobiles",
				price: "10999 Rs"
			},
			{	id: "0002",
				title:"Thompson Tv",
				category:"electronics",
				price: "10999 Rs"
			},
			{	id: "0003",
				title:"Godrej Mixure",
				category:"electronics",
				price: "10999 Rs"
			},
			{	id: "0004",
				title:"Hero cycle",
				category:"Bike",
				price: "14823 Rs"
			}
		]
		
		let filtered_product = []
		for(let p in products){
			if (products[p].category === params.product_cat){
				filtered_product.push(products[p])	
			}
		}
		if (filtered_product.length<=0){
			return products
		}
		return filtered_product
	}
	
})