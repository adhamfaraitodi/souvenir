<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('delivery', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained('orders')->cascadeOnDelete();
            $table->string('courier_name', 50);
            $table->string('tracking_number', 100)->nullable();
            $table->enum('shipping_status', ['pending','shipped', 'delivered']);
            $table->text('origin');
            $table->string('origin_name',30);
            $table->text('destination');
            $table->string('destination_name',30);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_delivery');
    }
};
