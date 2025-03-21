<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'password' => bcrypt('password'),
            'email' => 'admin@example.com',
            'role' => 'admin',
            'remember_token' =>'null',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
