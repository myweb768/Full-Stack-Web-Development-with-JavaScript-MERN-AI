# Book House - Web Layout Assignment

This project is a web layout assignment designed to demonstrate proficiency in CSS Grid and Flexbox. The objective was to create a responsive and interactive card-based interface for a book collection.

## Assignment Instructions

The following requirements were met during the development:

1. **Container (Grid):** A parent container was created using CSS Grid to display 3 cards in one row on desktop devices.
2. **Cards (Flexbox):** Each card contains an image, title, short description, and an 'Add to Cart' button.
3. **Internal Alignment:** Flexbox was used inside each card to arrange items vertically with proper spacing.
4. **Design Requirements:** Implemented border-radius, box-shadow, and interactive hover effects.
5. **Button Styling:** Buttons were styled with specific background colors and interactive hover color transitions.

## Implementation Details

- **CSS Grid:** Used `grid-template-columns: repeat(3, 1fr)` to ensure a clean 3-column layout.
- **Flexbox:** Employed `display: flex` with `flex-direction: column` to manage vertical alignment within the cards.
- **Interactive Effects:** To achieve the "expand on hover" feature without disrupting the layout, I used `position: absolute` for the cards inside a defined `card-wrapper`. This ensures the elements stay fixed while the card expands.
- **Maintainability:** Utilized CSS variables (`:root`) for color themes, allowing for easy global updates.

## Technologies Used

- **HTML5**
- **CSS3** (Grid, Flexbox, Transitions, Variables)

---

_Developed as part of the MERN 16 || M-3 Assignment._
