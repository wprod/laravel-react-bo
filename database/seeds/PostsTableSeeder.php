<?php

use Illuminate\Database\Seeder;
use App\Post;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {

         $faker = \Faker\Factory::create();

         // Create 50 product records
         for ($i = 0; $i < 50; $i++) {
            $name = $faker->unique()->name;
             Post::create([
               'userId' => $faker->randomNumber(1),
               'title' => $name,
               'slug' => str_slug($name),
               'description' => $faker->paragraph,
               'content' => $faker->paragraph,
               'likes' => $faker->randomNumber(3),
               'status' => $faker->boolean(50),
             ]);
         }
     }
}
