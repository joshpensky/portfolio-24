// Augment the CSSProperties interface to allow for CSS variable definition
// https://stackoverflow.com/a/52013197
declare module "csstype" {
  interface Properties {
    [cssVariable: `--${string}`]: string | number | undefined;
  }
}
