# Next.js Tailwinds FontAwesome
## Features
[`Next.js`](https://nextjs.org) [`Tailwinds CSS`](https://tailwindcss.com)  
[`Font Awesome Free`](https://fontawesome.com) [`Font Awesome Pro`](https://fontawesome.com)  
[`Tailwind UI`](https://tailwindui.com) [`Headless UI`](https://headlessui.dev)
## Setup Guides Used

* [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
* [Installing the Pro version of Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers#installing-pro)
* [Install Headless UI via npm](https://headlessui.dev/react/menu#installation)

## Additional Docs
* See whats new in [Tailwinds CSS (v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2)
* Generate CSS styles on demand with [Just-in-Time Mode](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS
* Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## How to use

### Clone Project
Clone locally
```bash
git clone https://github.com/jtylerh/nextjs-tailwinds-fontawesome.git
cd nextjs-tailwinds-fontawesome
```
or with Github CLI
```bash
gh repo clone JTylerH/nextjs-tailwinds-fontawesome
cd nextjs-tailwinds-fontawesome
```
or [`copy as template to your GitHub account`](https://github.com/jtylerh/nextjs-tailwinds-fontawesome/generate)

### Run Installer
```bash
npm install
```

### Optional: Install Font Awesome Pro
#### Authenticate access to Font Awesome Pro npm
1. [Login to Font Awesome](https://fontawesome.com/sessions/sign-in)  
2. Copy the content for the `.npmrc` file under the instructions for `Per-Project` directly from [this page](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers#installing-pro)  
3. Replace the contents of the included `.npmrc` file
```bash
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR-PRO-PACKAGE-TOKEN
```
*If logged into Font Awesome, your TOKEN should already be included.*  
*If you need to regenerate your Pro Package Token, visit your [Account Details page](https://fontawesome.com/account)*  
#### Install Font Awesome Pro package
```bash
npm install --save @fortawesome/fontawesome-pro
```
### Optional: Install Additional Font Awesome Free styles
```bash
npm install --save @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/free-regular-svg-icons
```

### Optional: Install Additional Font Awesome Pro styles
```bash
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
npm i --save @fortawesome/pro-light-svg-icons
npm i --save @fortawesome/pro-duotone-svg-icons
```

### Start Development Server in root
```bash
npm run dev
```
**Open your app at [`http://localhost:3000`](http://localhost:3000)**
  
<br/>

<br/>
  
****
##### Other Commands
```bash
npm run build
``` 
