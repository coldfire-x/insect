# My Taro App

This is a Taro-based project that allows you to take a picture, upload it to Baidu Yun OSS, and call an API to recognize insects in the picture. It also displays the wiki information from Baidu Baike.

## Project Structure

```
my-taro-app
├── src
│   ├── pages
│   │   ├── index
│   │   │   ├── index.tsx
│   │   │   └── index.scss
│   │   └── result
│   │       ├── result.tsx
│   │       └── result.scss
│   ├── services
│   │   ├── api.ts
│   │   └── oss.ts
│   ├── components
│   │   ├── Camera
│   │   │   ├── Camera.tsx
│   │   │   └── Camera.scss
│   │   └── WikiInfo
│   │       ├── WikiInfo.tsx
│   │       └── WikiInfo.scss
│   ├── app.tsx
│   └── app.scss
├── config
│   ├── dev.js
│   └── prod.js
├── package.json
├── project.config.json
└── README.md
```

## Usage

1. Install the dependencies by running `npm install`.
2. Configure the development environment in `config/dev.js`.
3. Configure the production environment in `config/prod.js`.
4. Run the app using `npm run dev` for development or `npm run build` for production.
5. Open the app in your browser and navigate to the main page.
6. Use the camera component to take a picture.
7. The picture will be uploaded to Baidu Yun OSS.
8. The API will be called to recognize the insects in the picture.
9. The result will be displayed along with the wiki information from Baidu Baike.

## Dependencies

The project dependencies are listed in the `package.json` file. Run `npm install` to install them.

## Configuration

The project has separate configuration files for the development and production environments. Modify `config/dev.js` and `config/prod.js` to set the appropriate configurations.

## API and OSS Services

The `src/services/api.ts` file exports functions to call the API for insect recognition. It handles the communication with the API and returns the result.

The `src/services/oss.ts` file exports functions to upload the picture to Baidu Yun OSS. It handles the authentication and file upload process.

## Components

### Camera

The `src/components/Camera/Camera.tsx` file contains the component that allows you to take a picture using your device's camera. It captures the image and passes it to the upload function.

The `src/components/Camera/Camera.scss` file contains the styles for the camera component.

### WikiInfo

The `src/components/WikiInfo/WikiInfo.tsx` file contains the component that displays the wiki information from Baidu Baike. It receives the result from the API and fetches the corresponding information from Baidu Baike.

The `src/components/WikiInfo/WikiInfo.scss` file contains the styles for the wiki info component.

## App

The `src/app.tsx` file is the entry point of the Taro app. It sets up the routes and renders the main page component.

The `src/app.scss` file contains the global styles for the app.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).