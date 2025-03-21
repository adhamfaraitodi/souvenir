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
        Schema::create('landing_page', function (Blueprint $table) {
            $table->id();
            $table->foreignId('theme_id')->constrained('themes')->noActionOnDelete();
            $table->string('title', 255);
            $table->string('landing_page_code', 255);
            $table->string('url', 255)->nullable();
            $table->string('url_redirect', 255)->nullable();
            $table->tinyInteger('edit_with');
            $table->text('html_code');
            $table->text('css_code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landing_page');
    }
};
