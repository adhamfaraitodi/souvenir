<?php

namespace Database\Seeders;

use App\Models\Address;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Address::create([
            'user_id' =>'1',
            'city_id' => '5',
            'postal_code' => '55111',
            'street_address' => 'Jl. Kebun Raya No.2, Rejowinangun',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
