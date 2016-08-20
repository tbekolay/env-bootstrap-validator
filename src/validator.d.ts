// Type definitions for bootstrap-validator 0.11.5
// Project: https://github.com/1000hz/bootstrap-validator
// Definitions by: Trevor Bekolay <https://github.com/tbekolay>
// Definitions: https://github.com/tbekolay/types-bootstrap-validator

/// <reference path="../jquery/jquery.d.ts"/>

interface FeedbackOptions {
    error?: string;
    success?: string;
}

interface BootstrapValidatorOptions {
    custom?: any;
    delay?: number;
    disable?: boolean;
    feedback?: FeedbackOptions;
    focus?: boolean;
    html?: boolean;
}

interface JQuery {
    validator(): JQuery;
    validator(options: BootstrapValidatorOptions): JQuery;
    validator(options: string): JQuery;
}
