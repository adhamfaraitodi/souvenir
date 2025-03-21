<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandingPage extends Model
{
    use HasFactory;
    protected $table = 'landing_page';
    protected $fillable = [
        'theme_id',
        'title',
        'landing_page_code',
        'url',
        'url_redirect',
        'edit_with',
        'html_code',
        'css_code',
        'created_at',
        'updated_at',
    ];

    public function order()
    {
        return $this->hasOne(Order::class, 'landing_page_id');
    }
    public function Theme()
    {
        return $this->belongsTo(Theme::class,'theme_id');
    }
    public function report()
    {
        return $this->hasMany(LandingPageReport::class, 'landing_page_id');
    }
    public function content()
    {
        return $this->hasOne(Content::class, 'landing_page_id');
    }
}
