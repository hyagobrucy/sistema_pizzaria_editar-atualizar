<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->group(function () {
    Route::get('/users', [UserController::class, 'index']); // Listar usuários
    Route::post('/users', [UserController::class, 'store']); // Criar usuário
    Route::get('/users/{id}', [UserController::class, 'show']); // Visualizar usuário
    Route::put('/users/{id}', [UserController::class, 'update']); // Atualizar usuário
    Route::delete('/users/{id}', [UserController::class, 'destroy']); // Deletar usuário
});
