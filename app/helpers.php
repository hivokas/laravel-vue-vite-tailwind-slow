<?php

use Illuminate\Support\HtmlString;

function vite(string $entrySrc): HtmlString
{
    return app(\App\Support\Vite::class)->render($entrySrc);
}
