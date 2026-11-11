class Filter {
    constructor(inputId, attributeName) {
        // Find the search input box and all elements matching the target attribute
        this.searchInput = document.querySelector(`#${inputId}`);
        this.employeees = document.querySelectorAll(`[${attributeName}]`);

        // Listen for typing ('keyup') or clearing out text ('search') in the input box
        this.searchInput.addEventListener('keyup', (event) => this.handleSearch(event));
        this.searchInput.addEventListener('search', (event) => this.handleSearch(event));
    }

    handleSearch(event) {
        // Get what the user typed and convert it to lowercase
        const searchTerm = event.target.value.toLowerCase();

        this.employeees.forEach(card => {
            // Get the data-caption text and convert it to lowercase
            const captionText = card.getAttribute('data-caption').toLowerCase();

            // If the caption includes the search term (or search is empty), show it. Otherwise, hide it.
            if (captionText.includes(searchTerm) || !searchTerm) {
                card.style.display = ''; // Show
            } else {
                card.style.display = 'none'; // Hide
            }
        });
    }
}