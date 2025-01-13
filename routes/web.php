<?php

use App\Http\Controllers\UserLandingPage;
use App\Http\Controllers\UserOrder;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {return view('welcome');});
Route::resource('order', UserOrder::class);
Route::resource('landing-page',UserLandingPage::class);
