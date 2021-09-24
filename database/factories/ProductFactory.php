<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'name' => $this->faker->name(),
            'discription' => $this->faker->text(),
            'price' => $this->faker->numberBetween(5000, 8000),
            'stock' => $this->faker->numberBetween(1000, 5000),
            'image' => asset('storage/dummy.jpg')
        ];
    }
}
