<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserDashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
    ]);
});


Route::get('/admin', function () {
    return Inertia::render('Admin/Dashboard');
});

Route::middleware(['auth','userOnly','verified'])->group(function (){
    Route::get('/dashboard',[UserDashboardController::class,'index'])->name('dashboard');
    //profile routes related
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')->middleware(['auth','authorizedOnly','verified'])->group(function () {
    Route::get('/dashboard',[DashboardController::class,'index'])->name('admin.dashboard');
});

require __DIR__.'/auth.php';
