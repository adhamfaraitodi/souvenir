<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;
    protected $table = 'delivery';
    protected $fillable = [
        'order_id',
        'courier_name',
        'tracking_number',
        'shipping_status',
        'origin',
        'origin_name',
        'destination',
        'destination_name',
        'created_at',
        'updated_at',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class,'order_id','id');
    }
}
