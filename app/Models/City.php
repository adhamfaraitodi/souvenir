<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $table = 'cities';
    protected $fillable = [
        'province_id',
        'city_name',
        'created_at',
        'updated_at'
    ];

    public function province()
    {
        return $this->belongsTo(Province::class, 'province_id');
    }
}
