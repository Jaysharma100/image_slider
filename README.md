# Image Slider

A lightweight, responsive image slider built with plain HTML, CSS and JavaScript.  
No external dependencies—just drop in your images and open `index.html`.

## preview
<img width="1354" height="863" alt="image" src="https://github.com/user-attachments/assets/1ceb0126-5a6b-4282-ab60-71801478e87b" />


## Features

- **Smooth transitions** using `translateX`
- **Auto-advance** every 3 seconds, resets on manual navigation
- **Previous/Next buttons** and **indicator dots** for manual control
- **Faint blurred background** of the current slide behind the slider
- **Full-page and title fill**: the page background and title text are clipped to the current slide image
- **Pause on hover** to give the user time to explore

## Setup

1. Clone or download this repo.
2. Create an `images/` folder at the project root.
3. Add **at least 5** images named `image1.jpg`, `image2.jpg`, … `image5.jpg`.

Your folder should look like:

my-slider/
├─ images/
│ ├ image1.jpg
│ ├ image2.jpg
│ └ …
├─ index.html
├─ style.css
└─ script.js


## Usage

- **Open** `index.html` directly in your browser (double-click or drag-and-drop).  
- **Or** spin up a quick local server:  
  ```bash
  cd my-slider
  python3 -m http.server 8000
