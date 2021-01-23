# Tasks Browser Extension for Canvas Instructure

Ever had trouble finding your weekly assignments? Wish you had a nice progress bar to motivate you to complete everything?  

No? Well either way, the **Tasks Browser Extension for Canvas** is here to help!

## Features

### Stay on Track
Colorful task items ensure that you'll never miss an assignment again.

![](demo/Demo1.png)

### Track Your Progress
Visual progress bars for each of your courses show how far you are in completing your assignments this week.

![](demo/Demo2.png)

### Make It Your Own
Task items and progress bars correspond with your chosen dashboard colors and positions.

![](demo/Demo3.png)

### Notes
- The sidebar only works in Card View.  
- Only assignments from courses that are visible on the dashboard will appear.
 - To change your dashboard courses, go to **Courses** in the left sidebar, go to **All Courses** and star the classes that you want on your dashboard.

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **10.13**.
2. Clone this repository.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load the extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

Built with [Chrome Extension Boilerplate with React 17 and Webpack 5](https://github.com/lxieyang/chrome-extension-boilerplate-react.git)
