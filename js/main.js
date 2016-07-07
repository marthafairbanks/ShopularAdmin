	
(function() {
    'use strict';
    angular
        .module('shopular', [])
        .controller('ShopController', function shop() {
        	var vm = this;
        	vm.tax = 0.0575;
            vm.data = 
				[
				  { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
				  { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
				  { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
				  { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
				  { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
				  { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
				  { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
				  { "id": 46, "name": "guitar", "price": 899, "quantity": 3, "color": "blue", "discount": 150 },
				  { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
				  { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
				  { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
				  { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
				];
			// takes the new info from the form and adds it to the array, 
			//also assigns a random id & clears the form
			vm.update = function update() {
				
				function assignId(min, max) {
				  return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				var formData = { 
					"id": assignId(0,100000), 
					"name": vm.form.name, 
					"price": vm.form.price, 
					"quantity": vm.form.quantity, 
					"color": vm.form.color, 
					"discount": vm.form.discount,
				};

				vm.data.push(formData);
				vm.form = [];

			};

			//calculates the total price taking into account discount and tax
			vm.getTotalPrice = function(price,discount) {
      			return (price - discount) * vm.tax + (price - discount);	
        	};
			
			//shows the sale img if there is a discount
			vm.isDiscounted = function(discount) {
				if (discount !== 0) {
					return true;	
				}
				else {
					return false;
        		}
        	};

        	//allows user to update quantity in the browser which updates 
        	//the array
        	vm.updateQuantity = function(item, newQuantity){
        		console.log(item, newQuantity);
     			var index = vm.data.indexOf(item);
     			vm.data[index].quantity = newQuantity;
 			};

        });
})();