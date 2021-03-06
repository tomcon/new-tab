<!-- markdownlint-disable no-duplicate-header no-inline-html -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.12.3] - 2018-08-29

### Changed

- Update dependencies — including a Svelte update which could bring improved performance due to batched component updates.

## [0.12.2] - 2018-08-28

### Changed

- Better search results "show more" button style.

## [0.12.1] - 2018-08-27

### Changed

- Switch from Travis to Circle CI for faster and better continuous integration.
- Clean up and improve `package.json`.

### Fixed

- Bookmarks not overflowing correctly due to incorrect calculation of width ("Other Bookmarks" not taken into consideration correctly).
- Don't show "Other Bookmarks" folder if it's empty.

## [0.12.0] - 2018-08-25

### Changed

- Only set the search component as `immutable` rather than the whole app.
- Update dependencies.

### Fixed

- Handle bookmark bar overflow.
- Hide "Other Bookmarks" when it's empty.

## [0.11.4] - 2018-08-24

### Changed

- Improve theme loading performance.
- Simplify theme colours.
- Switch shadows from `filter: drop-shadow()` to `box-shadow:` for faster paint during initial page load and scrolling.
- Adjust closure compiler settings.

### Removed

- CSS property `will-change` from menu so browser decides how to handle animation rather than forcing GPU.

## [0.11.3] - 2018-08-24

### Changed

- Small improvement to tab event handling.
- Update dependencies.

## [0.11.2] - 2018-08-23

### Changed

- Update dependencies.

### Removed

- Unnecessary line in content security policy configuration.

## [0.11.1] - 2018-08-22

### Changed

- Clean up settings page.

### Removed

- Don't generate title for settings page HTML.

## [0.11.0] - 2018-08-22

### Changed

- Place loader script into the main JS bundle rather than inlining in the HTML.
- Tweak how scripts are loaded for more consistent and faster initial load performance.
- Simplify build process.
- Simplify manifest generation and content security policy configuration.

## [0.10.0] - 2018-08-21

### Removed

- Error tracking. Instead I'll focus on well tested code rather than invading user privacy.

## [0.9.1] - 2018-08-21

### Changed

- Update dependencies.

## [0.9.0] - 2018-08-09

### Added

- Rollup JS bundle analyser.

### Changed

- Simplified default settings handling.
- Use verbose CSS class names. Components are more understandable at the cost of slightly larger file sizes. I intent to write a Svelte plugin to automatically rewrite the class names into a short form to get the best of both worlds.

### Fixed

- Bookmark folders open in the wrong place; off to the side.

## [0.8.0] - 2018-08-06

### Added

- Add static consts for common JS variables for better visibility and easy tweaking.

### Changed

- Big build and tooling refactor. Biggest change is JS minification is now done using Closure Compiler rather than Terser (based on UglifyJS). Although the output file size is slightly larger, the initial load and runtime performance are better. CSS minification has also been changed along with a bunch of small optimisations for a cleaner Rollup config.
- All themes are now inlined in the page and activated by a class instead of loading a separate file. Avoiding the network request means loading the theme is near instant and you'll notice a flash of unstyled content much less often.
- Refactor error tracking to use new Sentry JS SDK.
- Simplify Svelte hack for `:global()` CSS overrides.

### Removed

- Black theme. The dark theme is dark enough 😜.

### Fixed

- Error tracking event listeners not cleaned up correctly.
- Incorrect logic in install/upgrade events.

## [0.7.7] - 2018-08-04

### Fixed

- Clean up bookmark event listener to prevent memory leaks.

## [0.7.6] - 2018-08-03

### Changed

- Re-enable immutable build option.

## [0.7.5] - 2018-08-03

### Changed

- Disable immutable build option.
- Update dependencies.

## [0.7.4] - 2018-07-19

### Changed

- Use keyed each loops for search results items. This leads to better performance when performing searches due to less DOM changes.
- Optimise updating state for tabs and search results; don't set state multiple times if it can be avoided.
- Set `immutable` to `true` in Svelte built options for better runtime performance.
- Update dependencies.

### Fixed

- Tabs list is not always refreshed after `update` event.
- Top sites are not cleared/reset on ESC key press while a search is active.

## [0.7.3] - 2018-07-06

### Changed

- Better CSS minification.
- Update dependencies.

## [0.7.2] - 2018-06-27

### Added

- ⚡ lightning emoji to manifest description.

### Changed

- Update dependencies.

## [0.7.1] - 2018-06-24

### Changed

- Minor improvements to loaders.
- Update dependencies.

## [0.7.0] - 2018-06-15

### Changed

- Load JavaScript in a way which is faster and more consistent for page load performance. Uses some new browser APIs which are not available in Chrome =< v63.
- Increase the click area of bookmark items.
- Trim whitespace from HTML.
- Update dependencies.

## [0.6.6] - 2018-06-14

### Added

- New meta tag `notranslate`.

### Changed

- Much more restrictive CSP for better security.
- Shorten search placeholder text.
- Minor clean up of build script.
- Update dependencies.

### Removed

- Banner comment from HTML.

### Fixed

- Add href attribute to `<a>` in menu for correct cursor.

## [0.6.5] - 2018-06-12

### Changed

- Because `uglifyjs` is no longer supported, it's been swapped out for `terser` its active fork.
- Update dependencies.

## [0.6.4] - 2018-05-18

### Added

- More unit tests (which finally work now too!).

### Changed

- Refactor dev configs and tests to use [minna-ui](https://github.com/WeAreGenki/minna-ui) packages.
- Updated dependencies.

## [0.6.3] - 2018-05-09

### Changed

- Shortened search input placeholder text.
- Updated Svelte resulting in better code generation.

### Fixed

- Long bookmark folder titles are not truncated.

## [0.6.2] - 2018-05-03

### Changed

- Build improvements.
- Updated dependencies (including new version of Svelte which resulted in more optimised and smaller JavaScript bundles).

### Fixed

- Not obvious when search result item text is overflowing.
- Svelte dev feedback source incorrect (due to HTML whitespace minification).

## [0.6.1] - 2018-05-01

### Changed

- Simplify link handling; now a single listener on `window` rather than a listener for each link. Results in smaller bundle file size and less overall memory usage.

### Fixed

- Clicking on a top site link doesn't go to the site and just closes the tab.

## [0.6.0] - 2018-04-30

### Added

- Top sites are now also listed in search.

### Changed

- Complete rewrite from `Marko.js` to [`Svelte`](https://svelte.technology/guide#refs). After constant issues with marko I decided it was time for a change. Svelte works great for this use case and now not only is the extension faster and bundle files smaller, it's overcome all the extension's bugs.

### Fixed

- Search input not triggering search.
- Pressing `ESC` doesn't clear search.
- Bookmark item title incorrect when hovering subfolder items.
- Build process fails in new nodejs versions.

Known issues:

- Having too many bookmarks in the bookmark bar is still a problem.
- When sites don't have correct caching headers set up on their favicons it can delay fetching the other favicon images on page load. This causes a tiny but noticeable flash of favicon images.

## [0.5.1] - 2018-04-30

### Added

- Initial test suite and testing automation setup.

### Changed

- Move main JavaScript bundle to higher for a small performance improvement.
- Use a background script instead of a background page and set up an event handler for new installs and updates which saves the default settings.
- Build process improvements.
- Update dependencies.
- Developer tooling configuration tweaks.

### Fixed

- Temporarily disable JS advanced property mangling to prevent any related errors.

## [0.5.0] - 2018-02-13

### Added

- Experimental background page, which does nothing itself, but should keep the extension in memory.
- Tweaked extension manifest; now disallowed in incognito.

### Fixed

- Initial load time slow causing a flash of white unstyled page. Likely due to the extension not being in memory.

## [0.4.1] - 2018-02-13

### Fixed

- Incorrect CSP hash in extension manifest.

## [0.4.0] - 2018-02-13

### Added

- Themes! Now comes with light, dark, and black. The dark was also improved and is still the default option.
- Dedicated settings page. With the new themes it would be too cluttered to have the settings in the NTP itself. It also means there's slightly less computation when loading the NTP.

### Changed

- Settings now sync to your account.
- Improved file loader to handle themes.
- Some internal improvements to make the file size a tiny bit smaller and faster to parse.
- Make build steps more generic; modularise minification, simplify HTML template.
- Other general build improvements.

## [0.3.2] - 2018-02-09

### Added

- Release automation script.

### Changed

- Shorter code banner.
- More JavaScript minification tweaks for even smaller file size.
- Error reporting improvements.

## [0.3.1] - 2018-02-07

### Changed

- Use Marko event system to trigger bookmark folder close for better efficiency than browser native events.
- Simplify logic for opening a bookmark folder to the left; avoids a bunch of complex calculations on every folder open.
- Custom JavaScript object property mangling for even more file size savings.
- Small development watch script CLI feedback improvement.

### Fixed

- "Load more" bug in search results.

## [0.3.0] - 2018-02-05

### Added

- Better handle when to open and close bookmark folders for a smoother experience.
- Error tracking. Async and non-invasive. Since the performance impact is low it's also on by default but is easy to opt-out of.

### Changed

- Higher priority main JavaScript file loading for better load performance.
- Better CSS minification for smaller code final size and faster browser parsing.
- Build and development process improvements.
- Tighter <abbr title="Content Security Policy">CSP</abbr> than Chrome defaults for better security.
- JavaScript bundle size reductions.
- General code clean up.

### Fixed

- Menu animation no longer stutters.
- Menu is a bit more usable on small screens.
- Bug where the document is loaded multiple times due to an incorrect `<img>` src attribute.

## [0.2.0] - 2018-02-04

### Added

- Now published on the Google Chrome web store: <https://chrome.google.com/webstore/detail/new-tab/cpcibnbdmpmcmnkhoiilpnlaepkepknb>.
- Search now also finds matches in your browsing history.
- Subtle shadows to show depth and highlight areas of interest.
- New menu items and menu open animation.
- Listen to tab events and update tabs list when something changes.
- Show message when there are no matching search results for a category.
- Wrote a better readme.

### Changed

- Renamed all files and directories for consistency.
- A more logical file layout including most Marko components as single files rather than directories with multiple files.
- Better build flow.
- Performance improvements:
  - Inline CSS in HTML + add minimal page markup to template for near-instant initial page load.
  - Better minification in builds — even though Chrome extensions serve local files from the filesystem, minification still improves browser parsing times.
  - Short CSS classes for faster DOM parsing and matching.
  - Set many elements as `no-update` for much faster Marko rendering passes.
  - Use `key` on repeating elements for faster rendering when elements move in the DOM (e.g. during search/filtering).
- Clean up, improve, and move build scripts into `/build`.

### Removed

- Dependency `fast-memoize` as the benefit was not really there.

### Fixed

- Bookmark folders open to the right if there's not enough space to show the folder in the window.
- Debounce search input to help prevent layout thrashing when search results appear.
- Add `title` attribute to bookmarks to view long bookmark titles on hover.

## 0.1.0 - 2018-01-25

### Added

- Initial public version including all the basics; working proof of concept code, readme, etc. Not ready for release yet though, it's still far from being actually useful!

[Unreleased]: https://github.com/MaxMilton/new-tab/compare/v0.12.3...HEAD
[0.12.3]: https://github.com/MaxMilton/new-tab/compare/v0.12.2...v0.12.3
[0.12.2]: https://github.com/MaxMilton/new-tab/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/MaxMilton/new-tab/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/MaxMilton/new-tab/compare/v0.11.4...v0.12.0
[0.11.4]: https://github.com/MaxMilton/new-tab/compare/v0.11.3...v0.11.4
[0.11.3]: https://github.com/MaxMilton/new-tab/compare/v0.11.2...v0.11.3
[0.11.2]: https://github.com/MaxMilton/new-tab/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/MaxMilton/new-tab/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/MaxMilton/new-tab/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/MaxMilton/new-tab/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/MaxMilton/new-tab/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/MaxMilton/new-tab/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/MaxMilton/new-tab/compare/v0.7.7...v0.8.0
[0.7.7]: https://github.com/MaxMilton/new-tab/compare/v0.7.6...v0.7.7
[0.7.6]: https://github.com/MaxMilton/new-tab/compare/v0.7.5...v0.7.6
[0.7.5]: https://github.com/MaxMilton/new-tab/compare/v0.7.4...v0.7.5
[0.7.4]: https://github.com/MaxMilton/new-tab/compare/v0.7.3...v0.7.4
[0.7.3]: https://github.com/MaxMilton/new-tab/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/MaxMilton/new-tab/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/MaxMilton/new-tab/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/MaxMilton/new-tab/compare/v0.6.6...v0.7.0
[0.6.6]: https://github.com/MaxMilton/new-tab/compare/v0.6.5...v0.6.6
[0.6.5]: https://github.com/MaxMilton/new-tab/compare/v0.6.4...v0.6.5
[0.6.4]: https://github.com/MaxMilton/new-tab/compare/v0.6.3...v0.6.4
[0.6.3]: https://github.com/MaxMilton/new-tab/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/MaxMilton/new-tab/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/MaxMilton/new-tab/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/MaxMilton/new-tab/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/MaxMilton/new-tab/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/MaxMilton/new-tab/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/MaxMilton/new-tab/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/MaxMilton/new-tab/compare/v0.3.2...v0.4.0
[0.3.2]: https://github.com/MaxMilton/new-tab/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/MaxMilton/new-tab/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/MaxMilton/new-tab/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/MaxMilton/new-tab/compare/v0.1.0...v0.2.0
