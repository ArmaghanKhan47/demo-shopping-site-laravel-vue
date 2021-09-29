<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductComment;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductCommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductComment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $products = Product::select('id')->get()->map(function($element){
            return $element->id;
        });

        return [
            //
            'comment' => $this->faker->text(),
            'rating' => $this->faker->numberBetween(0, 5),
            'product_id' => $this->faker->randomElement($products)
        ];
    }
}
