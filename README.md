# iot-devices

This is the source repository for the Devbit IoT Devices course.

[![Netlify Status](https://api.netlify.com/api/v1/badges/527bfa8e-39b7-451b-a551-10fd72b3bff6/deploy-status)](https://app.netlify.com/sites/devbit-iot-devices/deploys)

## Development

Make sure you have Node.js installed and the following packages:

```bash
npm install -g vuepress
npm install -g yo
npm install -g generator-innovet-vuepress-course
```

### Running a Development Server

To start a local development server execute the following command inside the root folder of this project:

```bash
npm run docs:dev
```

This will start a local server and automatically convert the markdown files to html files.

Open a browser to the web address shown by the `npm run` command. Most typically this is [http://localhost:8080](http://localhost:8080).

### Generating Pages

A page is like a new chapter in your course. You can generate a new page by using the `innovet-vuepress-course` generator:

```bash
yo innovet-vuepress-course:page
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
