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
```bash
git clone https://github.com/jtylerh/nextjs-tailwinds-fontawesome.git
cd nextjs-tailwinds-fontawesome
```

### Run Installer
```bash
npm install
```

### Optional: Install Font Awesome Pro
1. [Login to Font Awesome](https://fontawesome.com/sessions/sign-in)  
2. Copy the last command in the intructions directly from [this page](https://fontawesome.com/v5.15/how-to-use/on-the-web/setup/using-package-managers#installing-pro)  
3. See below what the copied command should look like

```bash
FONTAWESOME_NPM_AUTH_TOKEN=TOKEN npm install --save @fortawesome/fontawesome-pro
```
4. Run the command you copied with your own Pro Package Token.  
*If logged into Font Awesome, your TOKEN should already be included.*  
*If you need to regenerate your Pro Package Token, visit your [Account Details page](https://fontawesome.com/account)*

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
