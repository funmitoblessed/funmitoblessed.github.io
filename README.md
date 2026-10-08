# funmitoblessed.github.io

Personal site and CV of Olúwafúnmitọ́ Blessed Odefemi, served at [funmitoblessed.com](https://funmitoblessed.com), plus my earlier front-end projects.

## Homepage (rebuilt October 2026)

One static page, no framework and no build step. GitHub Pages serves it as-is.

| File | What it is |
| --- | --- |
| `index.html` | All content: about, experience, skills, credentials, projects, research, contact |
| `assets/site/css/site.css` | Design tokens (light and dark), layout, and the print-as-CV styles |
| `assets/site/js/theme-init.js` | Applies a saved light/dark choice before the page paints |
| `assets/site/js/site.js` | Theme toggle, mobile menu, section highlighting, copy email, print |
| `assets/site/js/analytics.js` | Google Analytics. Delete this file and its `<script>` tag to remove tracking |
| `assets/site/fonts/` | Literata and Public Sans, self-hosted and subset to cover Yorùbá tone marks |
| `assets/site/img/` | Portrait, adire pattern, icon sprite, favicons, social preview image |
| `404.html` | Custom not-found page |
| `resume/index.html` | Redirects old resume links to `/#experience` |

**Updating content:** edit `index.html` directly. New roles go at the top of the first `<ol class="timeline">`. The "Print or save as PDF" button produces a clean CV from the same page.

**Security:** a Content Security Policy in each page's `<head>` allows only this site's own scripts, styles and fonts, plus Google Analytics. Keep scripts and styles in their own files (no `style=""` or inline `<script>`), or the policy will block them. If you add a third-party embed, add its domain to the policy.


## ALCwithGoogle final project  

[Pixel Art Maker](https://funmitoblessed.github.io/pixel-art-maker)

[Improved Pixel Art Maker](https://funmitoblessed.github.io/pixel-art-maker-improve)


## Udacity Front End Web Developer Nanodegree

[Portfolio Site](https://funmitoblessed.github.io/udacity-fe-nanodegree/portfolio-site)

[Memory Game](https://funmitoblessed.github.io/udacity-fe-nanodegree/memory-game)

[Classic Arcade Game Clone](https://funmitoblessed.github.io/udacity-fe-nanodegree/arcade-game)

[Feed Reader Testing App](https://funmitoblessed.github.io/udacity-fe-nanodegree/feedreader-test)

[Restaurant Reviews App](https://funmitoblessed.github.io/udacity-fe-nanodegree/restaurant-reviews)


## The Udemy Web Dev Bootcamp

[Simple Score Keeper App](https://funmitoblessed.github.io/web-dev-bootcamp/score-keeper-app)

[Color Game](https://funmitoblessed.github.io/web-dev-bootcamp/color-game)


## Pluralsight JavaScript Fundamentals

[Blackjack Game](https://funmitoblessed.github.io/pluralsight/blackjack-game)
