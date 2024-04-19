async function flipCard(element, frontLink, backLink) {
    // Function to wait for the transition to end
    function waitForTransitionEnd(element) {
        return new Promise(resolve => {
            const onTransitionEnd = () => {
                element.removeEventListener('transitionend', onTransitionEnd);
                resolve();
            };
            element.addEventListener('transitionend', onTransitionEnd);
        });
    }
 
 
    // Function to wait for an image to load
    function waitForImageToLoad(imageElement) {
        return new Promise(resolve => {
            const onImageLoad = () => {
                imageElement.removeEventListener('load', onImageLoad);
                resolve();
            };
            imageElement.addEventListener('load', onImageLoad);
        });
    }
 
 
    element.style.transform = 'rotateY(90deg)';
 
 
    // Wait for the half rotation to complete
    await waitForTransitionEnd(element);
 
 
    // Check if the current child is an image and switch the source
    if (element.children[0].tagName === 'IMG') {
        const newSrc = element.children[0].src.includes(backLink) ? frontLink : backLink;
        element.children[0].src = newSrc;
 
 
        // Wait for the new image to load
        await waitForImageToLoad(element.children[0]);
    }
 
 
    // Finish the rotation
    element.style.transform = 'rotateY(0deg)';
 
 
    // Wait for the full rotation to complete before ending the function
    await waitForTransitionEnd(element);
 }
 