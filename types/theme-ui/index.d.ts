// Type definitions for theme-ui 0.2
// Project: https://github.com/system-ui/theme-ui#readme
// Definitions by: Erik Stockmeier <https://github.com/erikdstock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as StyledSystem from "styled-system";
import { SystemStyleObject } from 'styled-system__css';
import * as React from "react";
import * as Emotion from "@emotion/core";
import * as CSS from 'csstype';

export {};

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };


export interface Theme extends StyledSystem.Theme {
    /** Provide a value here to enable color modes */
    initialColorMode?: string;
    colors?: StyledSystem.Theme['colors'] & {
        /** Body background color */
        background: CSS.ColorProperty;
        /** Body foreground color */
        text: CSS.ColorProperty;
        /** Primary brand color for links, buttons, etc. */
        primary: CSS.ColorProperty;
        /** A secondary brand color for alternative styling */
        secondary: CSS.ColorProperty;
        /** A faint color for backgrounds, borders, and accents that do not require high contrast with the background color */
        muted: CSS.ColorProperty;
        /** A contrast color for emphasizing UI */
        accent: CSS.ColorProperty;
        /** Nested color modes can provide overrides when used in conjunction with `Theme.initialColorMode and `useColorMode()` */
        modes: {
            [k: string]: Omit<Theme['colors'], 'modes'>;
        };
    };

    /**
     * Styles for elements rendered in MDX can be added to the theme.styles object.
     * This is the primary, low-level way to control typographic and other styles in markdown content.
     * Styles within this object are processed with @styled-system/css
     * and have access to base theme values like colors, fonts, etc.
     */
    styles?: {
        [k: string]: SystemStyleObject;
    };
}


interface Components {}

/**
 * A React renderer with awareness of the `sx` prop.
 * Requires the [custom @jsx jsx pragma](https://theme-ui.com/sx-prop) declaration
 * at the top of your file for use.
 */
export const jsx: typeof React.createElement;

// TODO: Verify
export const ThemeProvider: React.FC<{theme: Theme}>

// TODO: ??? maybe this extra type isn't needed? Maybe SystemStyleObject is enough?
/**
 * The `SystemStyleObject` extends [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 *
 */
export interface SxObject extends SystemStyleObject {}

// TODO: Verify
interface ThemeUIContext {theme: Theme, components: Components}

// TODO: Verify
export const Context: React.Context<ThemeUIContext>

// TODO: Verify
export const useThemeUI: () => typeof React.useContext;

/*~ TODO: There's some nested providers stuff here that makes useColorMode and other things a little harder
 * to track down- see src/provider.js
 */
export const useColorMode: (initialMode: string) => [string, (colorMode: string) => void]

// /*~ If this module has methods, declare them as functions like so.
//  */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

// /*~ You can declare types that are available via importing the module */
// export interface someType {
//     name: string;
//     length: number;
//     extras?: string[];
// }

// /*~ You can declare properties of the module using const, let, or var */
// export const myField: number;

// /*~ If there are types, properties, or methods inside dotted names
//  *~ of the module, declare them inside a 'namespace'.
//  */
// export namespace subProp {
//     /*~ For example, given this definition, someone could write:
//      *~   import { subProp } from 'yourModule';
//      *~   subProp.foo();
//      *~ or
//      *~   import * as yourMod from 'yourModule';
//      *~   yourMod.subProp.foo();
//      */
//     function foo(): void;
// }
