# Nx w/ Angular + Webpack + Rspack Comparison

The Angular app contains 800 lazy-loaded routes to 800 individual components living in Nx Workspace Libraries. 

## Running the builds

**Webpack**: `npx nx run myapp:build`
**Rspack**: `npx nx run myapp:build-rs`

## Verifying the build

Run `npx http-server dist/apps/myapp`.
This should start a local server on port `8080` which can be accessed via the browser.

## Benchmark Results

```shell
# Webpack Results (with Angular's Incremental Build Caching)
Benchmark 1: npx nx run myapp:build --skip-nx-cache
  Time (mean ± σ):      8.737 s ±  0.718 s    [User: 16.176 s, System: 1.463 s]
  Range (min … max):    7.782 s …  9.938 s    10 runs
  
# Rspack Results
Benchmark 1: npx nx run myapp:build-rs --skip-nx-cache
  Time (mean ± σ):      5.430 s ±  0.516 s    [User: 14.692 s, System: 2.228 s]
  Range (min … max):    4.840 s …  6.335 s    10 runs
```

## Running the Benchmarks

Install [hyperfine](https://github.com/sharkdp/hyperfine?tab=readme-ov-file#installation)
  On MacOS: `brew install hyperfine`

Run `npm run benchmark`
