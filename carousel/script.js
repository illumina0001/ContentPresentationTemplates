const iframe = document.getElementById('carousel-iframe');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const pages = ['https://example.com', 'https://example.org',]; // Replace with your subpages that contain the content
let currentPageIndex = 0;

// Preloading is intended to speed up the loading of the content, you can remove it if you prefer the iframes to load once the user visit them
const preloadIframes = () => {
    pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
};

const goToPrevPage = () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
    } else {
        currentPageIndex = pages.length - 1;
    }
    iframe.src = pages[currentPageIndex];
};


const goToNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
    } else {
        currentPageIndex = 0;
    }
    iframe.src = pages[currentPageIndex];
};

prevButton.addEventListener('click', goToPrevPage);
nextButton.addEventListener('click', goToNextPage);

preloadIframes();
