<?php

namespace App\Support;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;
use Throwable;

class Vite
{
    public function getDevServerPort(): int
    {
        return config('vite.port');
    }

    public function getDevServerProto(): string
    {
        return config('vite.https') ? 'https' : 'http';
    }

    public function getDevServerUrl(): string
    {
        return $this->getDevServerProto().'://localhost:'.$this->getDevServerPort();
    }

    public function isDevServerPreferred(): bool
    {
        return ! app()->isProduction();
    }

    public function isDevServerRunning(): bool
    {
        try {
            Http::withoutVerifying()->get($this->getDevServerUrl());

            return true;
        } catch (Throwable $e) {
            return false;
        }
    }

    public function getBuildDirectory(): string
    {
        return public_path('build');
    }

    public function getBuildUrl(): string
    {
        return asset('build');
    }

    public function getManifest(): array
    {
        return json_decode(File::get($this->getBuildDirectory().'/manifest.json'), true);
    }

    public function render(string $entrySrc): HtmlString
    {
        if ($this->isDevServerPreferred() && $this->isDevServerRunning()) {
            $tags[] = '<script type="module" src="'.$this->getDevServerUrl().'/@vite/client"></script>';
            $tags[] = '<script type="module" src="'.$this->getDevServerUrl().'/'.$entrySrc.'"></script>';
        } else {
            $manifest = $this->getManifest();

            $entry = $manifest[$entrySrc];

            $tags = [];

            $jsFile = $entry['file'];

            $tags[] = sprintf(
                '<script type="module" crossorigin src="%s"></script>',
                $this->getBuildUrl().'/'.$jsFile
            );

            foreach ($entry['css'] ?? [] as $cssFile) {
                $tags[] = sprintf(
                    '<link rel="stylesheet" href="%s">',
                    $this->getBuildUrl().'/'.$cssFile
                );
            }

            foreach ($entry['imports'] ?? [] as $import) {
                $tags[] = sprintf(
                    '<link rel="modulepreload" href="%s">',
                    $this->getBuildUrl().'/'.$manifest[$import]['file']
                );

                foreach ($manifest[$import]['css'] ?? [] as $cssFile) {
                    $tags[] = sprintf(
                        '<link rel="stylesheet" href="%s">',
                        $this->getBuildUrl().'/'.$cssFile
                    );
                }
            }
        }

        return new HtmlString(implode(PHP_EOL, $tags));
    }
}
