# GAdapHeadFRL project page

Project page for **Grouped Adaptive Head Mixing for Personalized Multi-Task Federated Reinforcement Learning**
(Yiran Pang, Zhen Ni, Dimitris Pados, Xiangnan Zhong; Florida Atlantic University).

Live site: https://yiranpang.github.io/GAdapHeadFRL/

## Layout

```
index.html            # the page
static/css/index.css  # styles
static/js/index.js    # BibTeX copy button
static/images/        # figures exported from the paper
static/images/envs/   # official MiniGrid environment GIFs (Farama Minigrid docs)
static/pdf/           # paper PDF
.nojekyll             # serve files as-is on GitHub Pages
```

## Updating

- Figures come from the LaTeX source `fig/` folder. The system overview is rendered from `fig/GAHM-sys.pdf` with
  `pdftoppm -png -r 200 -singlefile fig/GAHM-sys.pdf static/images/system_overview`.
- Replace `static/pdf/GAdapHeadFRL.pdf` with the latest compiled paper.
- Fill in the arXiv and code links in the header of `index.html` once available (search for "coming soon").

## Deploying

Push to `main` and enable GitHub Pages (Settings -> Pages -> Deploy from branch `main`, folder `/`).

The template is adapted from [Nerfies](https://nerfies.github.io) (CC BY-SA 4.0).
