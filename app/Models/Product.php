<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'discription',
        'price',
        'stock',
        'image'
    ];

    protected $with = [
        'feedbacks'
    ];

    protected $appends = [
        'average_rating',
        'slug'
    ];

    public function feedbacks(){
        return $this->hasMany(ProductComment::class, 'product_id', 'id');
    }

    public function getAverageRatingAttribute(){
        return round($this->feedbacks->avg('rating'), 2);
    }

    public function getSlugAttribute(){
        return Str::slug($this->name);
    }
}
