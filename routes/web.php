<?php

use App\Http\Controllers\User\LandingPageController;
use App\Http\Controllers\User\OrderController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {return view('welcome');});
Route::resource('order', OrderController::class);
Route::resource('landing-page',LandingPageController::class);
