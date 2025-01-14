<?php

use App\Http\Controllers\User\LandingPageController;
use App\Http\Controllers\User\ProductController;
use App\Http\Controllers\User\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products',[ProductController::class,'index']);
Route::get('/order',[OrderController::class,'index']);
Route::get('/landing-page',[LandingPageController::class,'index']);
