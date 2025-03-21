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
        $user= [
            ['name' => "admin", 'email' => "admin@example.com",'role'=>"admin"],
            ['name' => "user", 'email' => "user@example.com",'role'=>"user"],
        ];
        foreach ($user as $users) {
            User::create([
                'name' => $users['name'],
                'password' => bcrypt('password'),
                'email' => $users['email'],
                'role' => $users['role'],
                'remember_token' =>'null',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        };
    }
}
