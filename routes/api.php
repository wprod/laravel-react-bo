<?php

use Illuminate\Http\Request;
use App\Post;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//FIND ALL
Route::get('posts', 'PostsController@index');

//FIND ONE
Route::get('posts/{slug}', 'PostsController@show');

//CREATE
Route::post('posts','PostsController@store');

//UPDATE
Route::put('posts/{post}','PostsController@update');

//DELETE
Route::delete('posts/{post}', 'PostsController@delete');
