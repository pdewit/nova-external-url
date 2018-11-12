<?php

namespace Pdewit\ExternalUrl;

use Laravel\Nova\Fields\Field;

class ExternalUrl extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'external-url';

    public function __construct($name = 'External Link', $attribute = '', $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->exceptOnForms();
    }

    public function linkText($linkText) {
        return $this->withMeta(["linkText" => $linkText]);
    }
}
