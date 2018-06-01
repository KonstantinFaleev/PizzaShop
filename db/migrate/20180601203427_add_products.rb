class AddProducts < ActiveRecord::Migration[5.2]
  def change
    Product.create :title => 'Hawaiian', :description => 'This is Hawaiian pizza', :price => 150, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/pizza1.jpg'
    Product.create :title => 'Papperoni', :description => 'Nice Papperoni pizza', :price => 250, :size => 40, :is_spicy => false, :is_veg => false, :is_best_offer => true, :path_to_image => '/images/pizza2.jpg'
    Product.create :title => 'Vegetarian', :description => 'Amazing Vegetarian pizza', :price => 350, :size => 50, :is_spicy => false, :is_veg => true, :is_best_offer => false, :path_to_image => '/images/pizza3.jpg'
  end
end
