<?php

$componentNames = [];

$appTags = '';
$appImports = '';
$appComponents = '';

for ($i = 1; $i <= 100; $i++) {
    $componentName = 'Test'.$i;

    $appTags .= '    <'.$componentName.' />'.PHP_EOL;
    $appImports .= 'import '.$componentName.' from "./components/'.$componentName.'.vue";'.PHP_EOL;
    $appComponents .= $componentName.',';

    $content = <<<CONTENT
<template>
  <div class="text-sm test{$i}">Test {$i}</div>
</template>

<style>
.test{$i} {
  @apply text-red-500;
}
</style>

CONTENT;

    file_put_contents('./resources/js/components/'.$componentName.'.vue', $content);
}

$app = <<<CONTENT
<template>
  <div>
{$appTags}
  </div>
</template>

<script>
{$appImports}
export default {
  components: {{$appComponents}}
}
</script>
CONTENT;

file_put_contents('./resources/js/App.vue', $app);
