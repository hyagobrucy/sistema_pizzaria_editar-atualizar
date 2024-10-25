<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PizzaController;

Route::middleware('auth:api')->group(function () {
    Route::get('/users', [UserController::class, 'index']); 
    Route::post('/users', [UserController::class, 'store']); 
    Route::get('/users/{id}', [UserController::class, 'show']); 
    Route::put('/users/{id}', [UserController::class, 'update']); 
    Route::delete('/users/{id}', [UserController::class, 'destroy']); 

    Route::get('/pizzas', [PizzaController::class, 'index']); 
    Route::post('/pizzas', [PizzaController::class, 'store']); 
});
