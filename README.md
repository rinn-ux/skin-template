<a id="readme-top"></a>

![Static Badge](https://img.shields.io/badge/progress-complete-blue?style=for-the-badge)

<br />
<div align="center">
  <a href="https://github.com/rinn-ux/skin-template">
    <img src="https://github.com/rinn-ux/.github/blob/main/profile/header-tp.png?raw=true)" alt="Logo" >
  </a>

  <h3 align="center">skin-template</h3>

  <p align="center">
    Template repo for AO3 skin projects
    <br />
    <a href="https://github.com/rinn-ux/skin-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/rinn-ux/skin-template">View Demo</a>
    ·
    <a href="https://github.com/rinn-ux/skin-template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/rinn-ux/skin-template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

## About The Project

This is a template repo for AO3 skin projects. Built to work together with [dev-o3](https://github.com/rinn-ux/dev-o3).
<!--Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Commander.js
- SCSS

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started
To get started with this template you will want download the latest release of [dev-o3](https://github.com/rinn-ux/dev-o3/releases). Note down the filepath for this later.

### Prerequisites

1. Click `Use as Template` and follow instructions to setup your new skin repo.
2. `git clone https://github.com/rinn-ux/skin-template.git`

**OR**

Using the gh cli, you can do this all from the command line.
1. `gh repo create {USER OR ORG HERE}/{REPO TITLE HERE} --template="rinn-ux/skin-template`
2. `gh repo clone {USER OR ORG HERE}/{REPO TITLE HERE}`

Enter your project directory

3. `cd {USER OR ORG HERE}/{REPO TITLE HERE}`
4. `npm install -D`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
### `npm run build`
This will compile all sass/scss files inside your `src` folder to css files inside your new `build` folder.

### `npm run dev`
This will set up your dev-o3 with the right style imports and start up the liveserver. Make sure you have `DEV_PATH` and `THEME` set your your dev-o3 path and theme path variables in `env.json` respectively. This ensures the server is starting in from the right place and is grabbing the right styles. This command assumes you are developing a theme that will replace all of the ao3 styles. If you are building ontop of AO3 styles, use `npm run default`. 

### `npm run default`
This command is that same as `npm run dev`, it just also loads in the default ao3 styles.

### `npm run clear`
If it seems like theres something wrong with dev or default, clear will reset the html files and remove the any current stylesheets. This can happen if you have an auto linter or formater and any of the stylesheet link tags get broken up into multiple lines. Note, this will NOT work if the start and end comments are missing or incorrect.

### `npm run watch`
This wil set sass to watch and live compile your `src` folder to the proper `stylesheets/skins/user` folder in your dev-o3. You should run this command in another terminal from your live server to get real-time previews of your changes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Rinn/Rhylen - [@rinn-ux](https://rinn-ux.tumblr.com) - me@rhylennguyen.com

Project Link: [https://github.com/rinn-ux/skin-template](https://github.com/rinn-ux/skin-template)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Ao3 Skins](https://www.tumblr.com/ao3skin)
* [ReversiPlusPlus](https://github.com/galaxygrotesque/ReversiPlusPlus)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-gray?style=for-the-badge&logo=tailwindcss&logoColor=%230ea5e9
[Tailwind-url]: https://tailwindcss.com/
