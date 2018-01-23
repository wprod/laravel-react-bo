<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
      'userId', 'title', 'slug', 'description', 'content','likes', 'status'
    ];

    public function user() {
      return $this->belongsTo('App\User');
    }
}
