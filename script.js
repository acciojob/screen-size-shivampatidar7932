//your JS code here. If required.
 const sizeInfo = document.getElementById("sizeInfo");
        const screenSizeElement = document.getElementById("screenSize");

        function updateScreenSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            screenSizeElement.textContent = `Width: ${width} and Height: ${height}`;
        }

        // Initial update
        updateScreenSize();

        // Update on window resize
        window.addEventListener("resize", updateScreenSize);